import { writable } from 'svelte/store';
import { dummyItems } from './dummyData';
import type { Item } from '../types';

export const items = writable<Item[]>([]);

export const fetchItems = async () => {
  try {
    const response = await fetch('http://10.147.17.144:3000/staging/internal_dashboard/ebox/list');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    items.set(data);
  } catch (error) {
    console.error('Failed to fetch items, using dummy data:', error);
    items.set(dummyItems);
  }
};

export const createItem = async (item: Item) => {
  try {
    await fetch('http://10.147.17.144:3000/staging/internal_dashboard/ebox/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to create item:', error);
    items.update(currentItems => [...currentItems, item]);
  }
};

export const updateItem = async (item: Item) => {
  try {
    await fetch(`http://10.147.17.144:3000/staging/internal_dashboard/ebox/update/${item.serial_number}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to update item:', error);
    items.update(currentItems => currentItems.map(i => (i.serial_number === item.serial_number ? item : i)));
  }
};

export const deleteItem = async (serial_number: string) => {
  try {
    await fetch(`http://10.147.17.144:3000/staging/internal_dashboard/ebox/delete/${serial_number}`, {
      method: 'DELETE',
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to delete item:', error);
    items.update(currentItems => currentItems.filter(i => i.serial_number !== serial_number));
  }
};