import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
	const { viteStaticCopy } = await import('vite-plugin-static-copy');
	const tailwindcss = (await import('@tailwindcss/vite')).default;
	return {
		plugins: [
			preact(),
			tailwindcss(),
			viteStaticCopy({
				targets: [
					{ src: 'src/assets/icons', dest: 'assets' },
					{ src: 'src/assets/favicon.ico', dest: 'assets' },
				],
			}),
		],
		base: process.env.NODE_ENV === 'production' ? '/r2-calculator/' : '/',
	};
}); 