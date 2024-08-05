<script lang="ts">
	export let item: any = null;
	export let onSubmit;

	const handleSubmit = () => {
		onSubmit(item);
	};

	const onNewRecord = () => {
		item = {
			status: '',
			version: '',
			serial_number: ''
		};
	};

	const onRemoveRecord = () => {
		item = null;
	};
</script>

<button on:click={() => onNewRecord()} type="button" class="btn btn-success"
	><i class="fa fa-plus"></i>
</button>
<button on:click={() => onRemoveRecord()} type="button" class="btn btn-danger"
	><i class="fa fa-times-circle"></i>
</button>

{#if item != null}
	<form on:submit|preventDefault={handleSubmit} class="row g-3">
		<div class="col-md-4">
			<label for="serial_number" class="form-label">Serial Number</label>
			<input
				id="serial_number"
				type="text"
				bind:value={item.serial_number}
				class="form-control"
				placeholder="Serial Number"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="status" class="form-label">status</label>
			<input
				id="status"
				type="text"
				bind:value={item.status}
				class="form-control"
				placeholder="Status"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="date" class="form-label">version</label>
			<input
				id="version"
				type="text"
				bind:value={item.version}
				class="form-control"
				placeholder="version"
				required
			/>
		</div>
		<div class="col-12">
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
{/if}
