// Supabase Client
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

// Check if env vars are configured
const isConfigured = SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY;

if (!isConfigured && import.meta.env.DEV) {
  console.warn(
    '⚠️ Supabase not configured!\n' +
    'Create a .env file with:\n' +
    '  VITE_SUPABASE_URL=your-url\n' +
    '  VITE_SUPABASE_PUBLISHABLE_KEY=your-key\n' +
    'See .env.example for reference.'
  );
}

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase: SupabaseClient<Database> = isConfigured
  ? createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        storage: localStorage,
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : (null as unknown as SupabaseClient<Database>);

// Helper to check if supabase is available
export const isSupabaseConfigured = () => isConfigured;