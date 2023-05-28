import electronAdapter from '@ptkdev/sveltekit-electron-adapter';
import multiAdapter from '@macfja/svelte-multi-adapter';
import ionicAdapter from '@ptkdev/sveltekit-cordova-adapter';
import extentionAdapter from '@sveltejs/adapter-static';
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
		adapter: multiAdapter([
			electronAdapter({
				// default options are shown. On some platforms
				// these options are set automatically — see below
				pages: 'electron/src/svelte',
				assets: 'electron/src/svelte',
				fallback: null,
				precompress: true,
				strict: true,
				policy: "default-src 'self'; script-src 'self'",
				viewport: `width=device-width`
			}),
			ionicAdapter({
				pages: 'ionic/dist',
				assets: 'ionic/dist',
				fallback: null,
				precompress: false,
				strict: true,
				policy: "default-src 'self'; script-src 'self'",
				platform: 'capacitor'
			}),
			extentionAdapter({
				pages: 'browser-extention/build',
				assets: 'browser-extention/build',
				fallback: null,
				precompress: false,
				strict: true
			})
		]),
		appDir: 'svelteApp'
	}
};

export default config;
