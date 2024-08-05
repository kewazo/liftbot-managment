import { writable } from 'svelte/store';
import { dummyItems } from './eboxDummyData';
import type { EboxItem } from '../types';
import { BASE_URL } from '$lib/constants';

export const eboxItems = writable<EboxItem[]>([]);

export const fetchItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/ebox/list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    eboxItems.set(data);
  } catch (error) {
    console.error('Failed to fetch items, using dummy data:', error);
    eboxItems.set(dummyItems);
  }
};

export const createItem = async (item: EboxItem) => {
  try {
    await fetch(`${BASE_URL}/ebox/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to create item:', error);
    eboxItems.update(currentItems => [...currentItems, item]);
  }
};

export const updateItem = async (item: EboxItem) => {
  try {
    await fetch(`${BASE_URL}/ebox/update/${item.serial_number}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to update item:', error);
    eboxItems.update(currentItems => currentItems.map(i => (i.serial_number === item.serial_number ? item : i)));
  }
};

export const deleteItem = async (serial_number: string) => {
  try {
    await fetch(`${BASE_URL}/ebox/delete/${serial_number}`, {
      method: 'DELETE',
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to delete item:', error);
    eboxItems.update(currentItems => currentItems.filter(i => i.serial_number !== serial_number));
  }
};