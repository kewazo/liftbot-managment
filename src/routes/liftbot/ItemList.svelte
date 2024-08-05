<script lang="ts">
	import type { LiftbotItem } from '../../types';
	export let items: LiftbotItem[] = [];
	export let onEdit: (item: LiftbotItem) => void;
	export let onDelete: (serial_number: string) => void;
</script>

<table class="table table-striped table-condensed">
	<thead>
		<tr>
			<th>Status</th>
			<th>Version</th>
			<th>Serial number</th>
			<th>Edit</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<tr>
				<td><span class="badge bg-secondary"> {item.serial_number}</span></td>
				<td> {item.status}</td>
				<td> {item.version}</td>
				<td> {item.serial_number}</td>
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
