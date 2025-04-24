import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/ticketapp-react-exam/',
	plugins: [react()],
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
