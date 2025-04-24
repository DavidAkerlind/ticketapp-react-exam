import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
	base: '/ticketapp-react-exam/',
	plugins: [
		react(),
		compression({ algorithm: 'brotliCompress' }), // eller gzip
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('react-router-dom'))
							return 'vendor_router';
						if (id.includes('react')) return 'vendor_react';
						return 'vendor';
					}
				},
			},
		},
	},
});

// export default defineConfig({
// 	plugins: [react()],
// 	base: '/',
// });
