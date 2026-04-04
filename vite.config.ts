import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "@0xminds/component-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    componentTagger({
      enabled: mode === 'development', // Only in development mode
      debug: true, // Enable debug logging to see what's being tagged
      exclude: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '**/ui/**', // Exclude shadcn/ui components
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
