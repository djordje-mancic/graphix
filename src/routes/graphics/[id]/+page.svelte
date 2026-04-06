<script lang="ts">
	import { onMount, type Component } from 'svelte';
	import type { PageProps } from './$types';
	import { io } from 'socket.io-client';

	let View: Component | undefined = $state();
	const { params, data }: PageProps = $props();
	// svelte-ignore state_referenced_locally
	const graphics_id = params.id;
	onMount(async () => {
		View = (await import(`$graphics/${graphics_id}/View.svelte`)).default;

		window.postMessage(data.variables);

		const socket = io();

		socket.on(`graphics_updated_${graphics_id}`, (message) => {
			console.log(message);
			window.postMessage(message);
		});
	});
</script>

<View />
