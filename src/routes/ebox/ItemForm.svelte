<script lang="ts">
	/*export let item = {
		serial_number: '',
		password: '',
		config: {
			date: '',
			safety: 0,
			battery: 0,
			remote_controller: 0,
			transportation_platform: 0
		}
	};*/

	export let item = null;

	export let onSubmit;

	const handleSubmit = () => {
		onSubmit(item);
	};

	const onNewRecord = () => {
		item = {
			serial_number: '',
			password: '',
			config: {
				date: '',
				safety: 0,
				battery: 0,
				remote_controller: 0,
				transportation_platform: 0
			}
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
			<label for="password" class="form-label">Password</label>
			<input
				id="password"
				type="password"
				bind:value={item.password}
				class="form-control"
				placeholder="Password"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="date" class="form-label">Date</label>
			<input
				id="date"
				type="datetime-local"
				bind:value={item.config.date}
				class="form-control"
				placeholder="Date"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="safety" class="form-label">Safety</label>
			<input
				id="safety"
				type="number"
				bind:value={item.config.safety}
				class="form-control"
				placeholder="Safety"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="battery" class="form-label">Battery</label>
			<input
				id="battery"
				type="number"
				bind:value={item.config.battery}
				class="form-control"
				placeholder="Battery"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="remote_controller" class="form-label">Remote Controller</label>
			<input
				id="remote_controller"
				type="number"
				bind:value={item.config.remote_controller}
				class="form-control"
				placeholder="Remote Controller"
				required
			/>
		</div>
		<div class="col-md-4">
			<label for="transportation_platform" class="form-label">Transportation Platform</label>
			<input
				id="transportation_platform"
				type="number"
				bind:value={item.config.transportation_platform}
				class="form-control"
				placeholder="Transportation Platform"
				required
			/>
		</div>
		<div class="col-12">
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
{/if}
