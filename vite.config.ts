import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type ViteDevServer } from 'vite';
import { main_vite } from './src/server/main.ts';

const graphixServer = {
    name: 'graphixServer',
    configureServer(server: ViteDevServer) {
        main_vite(server);
    }
}

export default defineConfig({ plugins: [tailwindcss(), sveltekit(), graphixServer] });
