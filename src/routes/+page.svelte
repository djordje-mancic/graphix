<title>graphix - Dashboard</title>
<style>
	:global(body) {
		background-color: #101e17;
		color: #ffffff;
	}
</style>
<script lang="ts">
	import logo from '$lib/assets/graphix.svg';
	import PanelHolder from '$lib/components/PanelHolder.svelte';
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';

	let { data } = $props();
	let graphics_available: string[] = $state(data.graphics_available);

	onMount(async () => {
		const socket = io();
		window.addEventListener("message", ({data}) => {
			if (data.graphic && data.data) {
				socket.emit("update_graphic", data);
			}
		});
	});
</script>

<div class="flex flex-col">
	<div class="grow-0 shrink-0 z-10 h-16 sticky top-0 bg-black px-4 py-0 content-center" style="filter: drop-shadow(0px 0px 12px #000000ae);">
		<img class="h-[70%]" src={logo} alt="graphiX" />
	</div>
	<div class="grow flex gap-4 p-8 overflow-hidden flex-wrap">
		{#each graphics_available as graphic_name (graphic_name)}
			<PanelHolder graphic={graphic_name}/>
		{/each}
	</div>
</div>
