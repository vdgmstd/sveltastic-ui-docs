import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		// Order matters: SvelteKit preserves object-key order when translating to Vite resolve.alias,
		// and Vite's plain-string aliases match as PREFIX. The specific entries (styles, components/*)
		// must come before the bare 'sveltastic-ui' so the bare entry doesn't swallow subpaths.
		alias: {
			'sveltastic-ui/styles': '../ui/src/styles/tokens.css',
			'sveltastic-ui/components/*': '../ui/src/components/*',
			'sveltastic-ui': '../ui/src/index.ts'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				if (referrer?.startsWith('/docs/')) return;
				throw new Error(`${message} (linked from ${referrer ?? 'unknown'} → ${path})`);
			},
			handleMissingId: 'warn'
		}
	}
};

export default config;
