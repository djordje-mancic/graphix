<script lang="ts">
	import { resolve } from "$app/paths";
    import open from "$lib/assets/icons/open.svg";
	import { onMount } from "svelte";
    let { graphic } = $props();

    let Panel = $state();
	onMount(async () => {
		Panel = (await import(`$lib/graphics/${graphic}/Panel.svelte`)).default;
        console.log(Panel);
	})
</script>

<style>
    :global(input), :global(textarea) {
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

<div class="bg-black p-4 pt-4 rounded-2xl outline-1 drop-shadow-md" style="outline-color: #ffffff15;">
    <div class="min-w-40 flex items-center gap-4">
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
        <div class="p-4 mt-4 rounded-md bg-neutral-900 outline-1" style="outline-color: #ffffff40;">
            <Panel/>
        </div>
    {/if}
</div>