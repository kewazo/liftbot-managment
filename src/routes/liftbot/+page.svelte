<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import {
		liftbotItems,
		fetchItems,
		createItem,
		updateItem,
		deleteItem
	} from '../../stores/liftbotStore';

	import ItemForm from './ItemForm.svelte';
	import ItemList from './ItemList.svelte';

	import type { LiftbotItem } from '../../types';

	let currentItem: LiftbotItem | null = null;
	let itemList: LiftbotItem[] = [];

	const unsubscribe = liftbotItems.subscribe((value) => {
		itemList = value;
	});

	onMount(() => {
		fetchItems();
	});

	const handleCreate = (item: LiftbotItem) => {
		createItem(item);
		currentItem = null;
	};

	const handleEdit = (item: LiftbotItem) => {
		currentItem = item;
	};

	const handleUpdate = (item: LiftbotItem) => {
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
</script>

<main>
	<h1>Liftbot Managment</h1>

	{#if currentItem}
		<ItemForm item={currentItem} onSubmit={handleUpdate} />
	{:else}
		<ItemForm onSubmit={handleCreate} />
	{/if}

	<ItemList items={itemList} onEdit={handleEdit} onDelete={handleDelete} />
</main>
