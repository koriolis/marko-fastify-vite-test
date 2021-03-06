import { defineConfig } from 'vite';
import marko from '@marko/vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
	plugins: [
		marko(),
		WindiCSS({
			scan: {
				runOnStartup: true
			}
		})
	],
	build: {
		minify: true,
		outDir: 'dist', // Server and client builds should output assets to the same folder.
		emptyOutDir: false, // Avoid server / client deleting files from each other.
		rollupOptions: {
			output: {
				// Output ESM for the server build also.
				// Remove when https://github.com/vitejs/vite/issues/2152 is resolved.
				format: 'es'
			}
		}
	}
});
