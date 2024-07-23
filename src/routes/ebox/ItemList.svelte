<script lang="ts">
	import type { Item } from '../../types';
	export let items: Item[] = [];

	export let onEdit: (item: Item) => void;
	export let onDelete: (serial_number: string) => void;
</script>

<table class="table table-striped table-condensed">
	<thead>
		<tr>
			<th>Serial Number</th>
			<th>Password</th>
			<th>Date</th>
			<th>Safety</th>
			<th>Battery</th>
			<th>Remote Controller</th>
			<th>Transportation Platform</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<tr>
				<td><span class="badge bg-secondary"> {item.serial_number}</span></td>
				<td>{item.password}</td>
				<td> {item.config.date}</td>
				<td> {item.config.safety}</td>
				<td> {item.config.battery}</td>
				<td> {item.config.remote_controller}</td>
				<td> {item.config.transportation_platform}</td>
				<td><button class="btn btn-info" on:click={() => onEdit(item)}>Edit</button></td>
				<td
					><button class="btn btn-danger" on:click={() => onDelete(item.serial_number)}
						>Delete</button
					></td
				>
			</tr>
		{/each}
	</tbody>
</table>
