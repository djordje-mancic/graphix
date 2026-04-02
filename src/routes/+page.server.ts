import { readdir } from 'fs/promises';
import type { PageServerLoad } from './$types';
import { existsSync } from 'fs';

const graphics_path = 'src/lib/graphics';

export const load: PageServerLoad = async () => {
    const dir = await readdir(graphics_path);
    const graphics_available: string[] = [];

    dir.forEach(item_name => {
        const base_path = `${graphics_path}/${item_name}`;
        if (existsSync(`${base_path}/View.svelte`) || existsSync(`${base_path}/Panel.svelte`)) {
            graphics_available.push(item_name);
        }
    });

    return {
        graphics_available: graphics_available
    }
}