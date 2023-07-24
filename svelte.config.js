import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		paths: {
			base: '/threlte-xr',
		},
		prerender: {
			handleHttpError: 'warn',
		},
		adapter: adapter(),
	}
}

export default config
