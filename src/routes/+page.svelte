<title>graphix - Dashboard</title>
<style>
	:global(body) {
		background-color: #101e17;
		color: #ffffff;
	}

	.topbar {
		position: sticky;
		top: 0;
		height: 64px;
		background-color: #000000;
		filter: drop-shadow(0px 0px 12px #000000ae)
	}

	.topbar img {
		position: relative;
		top: 15%;
		left: 16px;
		height: 70%;
	}
</style>
<script>
	import logo from '$lib/assets/graphix.svg';
	import PanelHolder from '$lib/components/PanelHolder.svelte';
	import { io } from 'socket.io-client';
	import { onMount } from 'svelte';

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
	<div class="topbar grow-0 shrink-0">
		<img src={logo} alt="graphiX" />
	</div>
	<div class="grow flex gap-4 p-8 overflow-hidden flex-wrap">
		<PanelHolder graphic="graphix-overlay"/>
	</div>
</div>
