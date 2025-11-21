import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteImageOptimizer({
			png: { quality: 80 },
			jpeg: { quality: 80 },
			jpg: { quality: 80 },
			webp: { quality: 80 },
		}),
	],
	base: "/", // ← Cambiar de '/mi-portafolio/' a '/'
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "react-router-dom"],
				},
			},
		},
		minify: "terser",
		terserOptions: {
			compress: {
				drop_console: true, // Eliminar console.log en producción
				drop_debugger: true,
				pure_funcs: ["console.log", "console.info"],
			},
		},
		// Configura el cache
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 500,
	},
});
