<script lang="ts">
	import { onMount } from 'svelte'
	import type { PageProps } from './$types';
	import { io } from 'socket.io-client';

	let View = $state();
    const { params }: PageProps = $props();
	// svelte-ignore state_referenced_locally
	const graphics_id = params.id;
	onMount(async () => {
		View = (await import(`$lib/graphics/${graphics_id}/View.svelte`)).default

		const socket = io();

		socket.on(`graphics_updated_${graphics_id}`, (message) => {
			console.log(message);
			window.postMessage(message);
		});
	})
</script>
<View/>