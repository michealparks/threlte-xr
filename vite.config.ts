import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		mkcert(),
		sveltekit(),
	],
})
