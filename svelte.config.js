import adapter from '@ptkdev/sveltekit-electron-adapter';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'electron/src/svelte',
			assets: 'electron/src/svelte',
			fallback: null,
			precompress: true,
			strict: true,
			policy: "default-src 'self'; script-src 'self'",
			viewport: `width=device-width`
		})
	}
};

export default config;
