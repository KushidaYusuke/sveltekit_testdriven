import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
	  reporters: ['verbose'],
		environment: 'jsdom',
    setupFiles: [
			'./src/vitest/registerMatchers.js',
			'./src/vitest/cleanupDom.js',
		],
		restoreMocks: true,
	}
});


