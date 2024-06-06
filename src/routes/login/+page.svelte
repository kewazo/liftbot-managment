<script lang="ts">
	let count = $state(0);
	import { invalidateAll } from '$app/navigation';
	import { signIn, signOut, initialize } from 'svelte-google-auth/client';
	import type { PageData } from './$types.js';

	let { data } = $props();
	initialize(data, invalidateAll);

	function increment() {
		count += 1;
	}
</script>

<div class="video-container">
	<!-- Embed the video using an <video> element -->
	<video class="video" autoplay loop muted>
		<source
			src="https://video.wixstatic.com/video/544cff_b53d007c2d2e43b68a0d2a464c1388c6/720p/mp4/file.mp4"
			type="video/mp4"
		/>
		Your browser does not support the video tag.
	</video>
	<div class="overlay"></div>
</div>

<div
	class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-transparent"
>
	<a
		href=""
		class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
	>
		<img src="" class="mr-4 h-11" alt="Logo" />
		<span>Liftbot Managment</span>
	</a>
	<!-- Card -->
	<div
		class="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white bg-opacity-50 rounded-lg shadow dark:bg-gray-800"
	>
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white">Sign in to platform</h2>
		<form class="mt-8 space-y-6" action="#">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your email</label
				>
				<input
					type="email"
					name="email"
					id="email"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					placeholder="name@company.com"
					required
				/>
			</div>
			<div>
				<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
					>Your password</label
				>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="••••••••"
					class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					required
				/>
			</div>

			{data.auth.user?.name}
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => signIn()}>Sign In</button
			>
			<button on:click={() => signOut()}>Sign Out</button>

			<button
				class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
				on:click={increment}
			>
				clicks: {count}
			</button>
			<div class="flex items-start">
				<div class="flex items-center h-5">
					<input
						id="remember"
						aria-describedby="remember"
						name="remember"
						type="checkbox"
						class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
						required
					/>
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="font-medium text-gray-900 dark:text-white">Remember me</label
					>
				</div>
				<a href="#" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"
					>Lost Password?</a
				>
			</div>
			<button
				type="submit"
				class="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>Login to your account</button
			>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-400">
				Not registered? <a class="text-primary-700 hover:underline dark:text-primary-500"
					>Create account</a
				>
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}

	/* Define a class for the video container */
	.video-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1; /* Ensure the video is behind other content */
	}

	/* Define a class for the video element */
	.video {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensure the video covers the entire container */
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent grey */
		z-index: 1; /* Ensure the overlay is above the video */
	}
</style>
