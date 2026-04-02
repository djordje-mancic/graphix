<script lang="ts">
	import { resolve } from "$app/paths";
    import open from "$lib/assets/icons/open.svg";
	import { onMount, type Component } from "svelte";
    let { graphic } = $props();

    let Panel: Component | undefined = $state();
	onMount(async () => {
		Panel = (await import(`$graphics/${graphic}/Panel.svelte`)).default;
        console.log(Panel);
	})
</script>

<style>
    :global(input), :global(textarea), :global(select) {
		background-color: #333333;
		border-radius: 8px;
		padding: 4px;
		min-height: 32px;
	}

	:global(button) {
		background-color: rgb(15, 15, 15);
		border-radius: 8px;
		padding: 4px 12px;
		outline: 1px solid #ffffff44;
		cursor: pointer;
		transition: 0.2s;
	}

	:global(button):hover {
		background-color: #ffffff;
		color: #000000;
	}

	:global(button):active {
		background-color: #cacaca;
		color: #000000;
		padding: 3px 12px;
	}
</style>

<div class="bg-black p-2 pt-4 outline-1 h-fit rounded-md" style="outline-color: #ffffff15; filter: drop-shadow(0px 0px 6px #00000099);">
    <div class="min-w-40 flex items-center gap-4 px-2">
        <div class="font-bold grow">
            {graphic}
        </div>
        <div class="grow-0">
            <a href={resolve(`/graphics/${graphic}`)} title="Open graphic in a new tab" target="_blank">
                <img src={open} class="h-8" alt="open"/>
            </a>
            
        </div>
    </div>

    {#if Panel}
        <div class="p-3 mt-4 bg-neutral-900 outline-1 rounded-xs" style="outline-color: #ffffff40;">
            <Panel/>
        </div>
    {/if}
</div>