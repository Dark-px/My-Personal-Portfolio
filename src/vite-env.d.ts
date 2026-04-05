/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_PUBLISHABLE_KEY?: string;
  readonly VITE_API_URL?: string;
  readonly VITE_PROJECT_ID?: string;
  readonly VITE_MEDIUM_USERNAME?: string;
  readonly VITE_MEDIUM_FEATURED_POST_1?: string;
  readonly VITE_MEDIUM_FEATURED_POST_2?: string;
  readonly VITE_MEDIUM_FEATURED_POST_3?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
