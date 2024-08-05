<script lang="ts">
	import '../app.css';
	import '../styles.scss';
	import { invalidateAll } from '$app/navigation';
	import { signIn, signOut, initialize } from '$lib/client.js';
	import type { PageData } from './$types.js';

	export let data: PageData;
	initialize(data, invalidateAll);
</script>

<nav class="navbar bg-body-tertiary fixed-top">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Internal Dashboard Managment</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#offcanvasNavbar"
			aria-controls="offcanvasNavbar"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			class="offcanvas offcanvas-start"
			tabindex="-1"
			id="offcanvasNavbar"
			aria-labelledby="offcanvasNavbarLabel"
		>
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
				></button>
			</div>
			<hr />
			<div class="offcanvas-body">
				{#if data.auth.user}
					<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
						<li class="nav-item">
							Signed in as {data.auth.user.name} ({data.auth.user.email})
							<img
								src={data.auth.user.picture}
								width={36}
								referrerpolicy="no-referrer"
								alt="profile"
							/>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/ebox">Ebox</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/user">User</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/liftbot">Liftbot</a>
						</li>
						<li class="nav-link">
							<a href="/">Dashboard</a>
						</li>
						<li class="nav-link">
							<button on:click={() => signOut()}>Sign out</button>
						</li>
					</ul>
				{:else}
					<p>
						<button
							on:click={() =>
								signIn([
									'openid',
									'profile',
									'email',
									'https://www.googleapis.com/auth/calendar.readonly'
								])}>Sign in</button
						>
					</p>
				{/if}

				<form class="d-flex mt-3" role="search">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</div>
</nav>

<header>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
	/>
</header>

{#if data.auth.user}{:else}
	<p>
		<button
			on:click={() =>
				signIn(['openid', 'profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly'])}
			>Sign in</button
		>
	</p>
{/if}

<slot />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
</svelte:head>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
		max-width: 800px;
		margin: auto;
	}

	header {
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	header p {
		display: flex;
		align-items: center;
	}
</style>
