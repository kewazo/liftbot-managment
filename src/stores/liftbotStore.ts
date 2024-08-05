import { writable } from 'svelte/store';
import { dummyItems } from './liftbotDummyData';
import type { LiftbotItem } from '../types';
import { BASE_URL } from '$lib/constants';

export const liftbotItems = writable<LiftbotItem[]>([]);

export const fetchItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/liftbot/list`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    liftbotItems.set(data);
  } catch (error) {
    console.error('Failed to fetch items, using dummy data:', error);
    liftbotItems.set(dummyItems);
  }
};

export const createItem = async (item: LiftbotItem) => {
  try {
    await fetch(`${BASE_URL}/liftbot/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to create item:', error);
    liftbotItems.update(currentItems => [...currentItems, item]);
  }
};

export const updateItem = async (item: LiftbotItem) => {
  try {
    await fetch(`${BASE_URL}/liftbot/update/${item.serial_number}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to update item:', error);
    liftbotItems.update(currentItems => currentItems.map(i => (i.serial_number === item.serial_number ? item : i)));
  }
};


export const linkEbox = async (item: LiftbotItem) => {
  try {
    await fetch(`${BASE_URL}/liftbot/link_ebox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to update item:', error);
    liftbotItems.update(currentItems => currentItems.map(i => (i.serial_number === item.serial_number ? item : i)));
  }
};

export const deleteItem = async (serial_number: string) => {
  try {
    await fetch(`${BASE_URL}liftbot/delete/${serial_number}`, {
      method: 'DELETE',
    });
    fetchItems();
  } catch (error) {
    console.error('Failed to delete item:', error);
    liftbotItems.update(currentItems => currentItems.filter(i => i.serial_number !== serial_number));
  }
};