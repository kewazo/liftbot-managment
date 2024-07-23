<script lang="ts">
	export let item = {
		serial_number: '',
		password: '',
		config: {
			date: '',
			safety: 1,
			battery: 2,
			remote_controller: 2,
			transportation_platform: 2
		}
	};
	export let onSubmit;

	const handleSubmit = () => {
		onSubmit(item);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={item.serial_number} placeholder="Serial Number" required />
	<input type="password" bind:value={item.password} placeholder="Password" required />
	<input type="datetime-local" bind:value={item.config.date} placeholder="Date" required />
	<input type="number" bind:value={item.config.safety} placeholder="Safety" required />
	<input type="number" bind:value={item.config.battery} placeholder="Battery" required />
	<input
		type="number"
		bind:value={item.config.remote_controller}
		placeholder="Remote Controller"
		required
	/>
	<input
		type="number"
		bind:value={item.config.transportation_platform}
		placeholder="Transportation Platform"
		required
	/>
	<button type="submit">Submit</button>
</form>
