<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { items, fetchItems, createItem, updateItem, deleteItem } from '../../stores/store';

	import ItemForm from './ItemForm.svelte';
	import ItemList from './ItemList.svelte';

	import type { Item } from '../../types';

	let currentItem: Item | null = null;
	let itemList: Item[] = [];

	const unsubscribe = items.subscribe((value) => {
		itemList = value;
	});

	onMount(() => {
		fetchItems();
	});

	const handleCreate = (item: Item) => {
		createItem(item);
		currentItem = null;
	};

	const handleEdit = (item: Item) => {
		currentItem = item;
	};

	const handleUpdate = (item: Item) => {
		updateItem(item);
		currentItem = null;
	};

	const handleDelete = (serial_number: string) => {
		deleteItem(serial_number);
	};

	// Unsubscribe from the store when the component is destroyed
	onDestroy(() => {
		unsubscribe();
	});

	console.log($items);
</script>

<main>
	<h1>E-Box Managment</h1>

	{#if currentItem}
		<ItemForm item={currentItem} onSubmit={handleUpdate} />
	{:else}
		<ItemForm onSubmit={handleCreate} />
	{/if}

	<ItemList items={itemList} onEdit={handleEdit} onDelete={handleDelete} />
</main>
