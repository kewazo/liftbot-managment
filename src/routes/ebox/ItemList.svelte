<script lang="ts">
	import type { Item } from '../../types';
	export let items: Item[] = [];

	export let onEdit: (item: Item) => void;
	export let onDelete: (serial_number: string) => void;
</script>

{#each items as item}
	<div>
		<p>Serial Number: {item.serial_number}</p>
		<p>Password: {item.password}</p>
		<p>Date: {item.config.date}</p>
		<p>Safety: {item.config.safety}</p>
		<p>Battery: {item.config.battery}</p>
		<p>Remote Controller: {item.config.remote_controller}</p>
		<p>Transportation Platform: {item.config.transportation_platform}</p>
		<button on:click={() => onEdit(item)}>Edit</button>
		<button on:click={() => onDelete(item.serial_number)}>Delete</button>
	</div>
{/each}
