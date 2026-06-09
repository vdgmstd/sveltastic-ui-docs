import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	// Avoid MQ range-syntax (`width<=N`) — Safari <16.4 drops the rule and the layout fails to stack.
	build: { cssTarget: ['chrome103', 'edge103', 'firefox101', 'safari16'] },
	server: { host: '0.0.0.0', port: 5001, strictPort: true },
	preview: { host: '0.0.0.0', port: 5001, strictPort: true }
});
