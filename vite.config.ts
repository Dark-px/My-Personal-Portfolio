import { defineConfig } from "vite";
import path from "path";
import { componentTagger } from "@0xminds/component-tagger";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: Array<unknown> = [];

  try {
    const reactPlugin = await import("@vitejs/plugin-react-swc");
    plugins.push(reactPlugin.default());
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.warn(
      `[vite-config] @vitejs/plugin-react-swc is unavailable, continuing without it. Reason: ${reason}`
    );
  }

  plugins.push(
    componentTagger({
      enabled: mode === "development", // Only in development mode
      debug: true, // Enable debug logging to see what's being tagged
      exclude: [
        "node_modules/**",
        "dist/**",
        "build/**",
        "**/ui/**", // Exclude shadcn/ui components
      ],
    })
  );

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
