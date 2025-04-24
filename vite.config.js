import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/ticketapp-react-exam/',
	plugins: [react(), visualizer({ open: true })],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						if (id.includes('react-router-dom')) {
							return 'vendor_router';
						}
						if (id.includes('react')) {
							return 'vendor_react';
						}
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
