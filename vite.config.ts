import { defineConfig, loadEnv } from "vite";
import path from "path";
import { componentTagger } from "@0xminds/component-tagger";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isPromptsVariant = env.VITE_SITE_VARIANT === "prompts";

  const seo = isPromptsVariant
    ? {
        title: "AI Prompt Library | Parsa Ghaei",
        description:
          "A curated AI Prompt Library by Parsa Ghaei with structured prompts for writing, research, visual design, and coding workflows.",
        keywords:
          "AI prompts, Prompt library, ChatGPT prompts, Claude prompts, Gemini prompts, Parsa Ghaei",
        ogTitle: "AI Prompt Library | Parsa Ghaei",
        ogDescription:
          "Structured prompts for writing, research, visual design, and coding workflows.",
        ogImage: "/og-prompts.svg",
        canonicalUrl: "https://prompts.parsaghaei.dev/",
      }
    : {
        title: "Parsa Ghaei | Game Developer & Designer",
        description:
          "Parsa Ghaei - aspiring Game Developer and Game Designer studying Unity and C#. Building gameplay mechanics and documenting the journey into game development.",
        keywords:
          "Game Developer, Game Designer, Unity, C#, Game Development, Portfolio, Parsa Ghaei",
        ogTitle: "Parsa Ghaei | Game Developer & Designer",
        ogDescription:
          "Aspiring Game Developer and Game Designer studying Unity and C#. Building gameplay mechanics and documenting the journey.",
        ogImage: "/hero-bg.png",
        canonicalUrl: "https://parsaghaei.dev/",
      };

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
    {
      name: "inject-static-seo",
      transformIndexHtml(html: string) {
        return html
          .replace(/__SITE_TITLE__/g, seo.title)
          .replace(/__SITE_DESCRIPTION__/g, seo.description)
          .replace(/__SITE_KEYWORDS__/g, seo.keywords)
          .replace(/__SITE_OG_TITLE__/g, seo.ogTitle)
          .replace(/__SITE_OG_DESCRIPTION__/g, seo.ogDescription)
          .replace(/__SITE_OG_IMAGE__/g, seo.ogImage)
          .replace(/__SITE_CANONICAL_URL__/g, seo.canonicalUrl);
      },
    },
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
