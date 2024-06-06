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
	<h1>MaingPage</h1>
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
