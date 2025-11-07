import { createClient } from '@supabase/supabase-js';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/types/database';

// Get Supabase configuration from environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration. Please check your environment variables.');
}

// Create Supabase client
export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      // We're using Clerk for authentication, so we'll disable Supabase auth
      autoRefreshToken: false,
      persistSession: false,
    },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
  }
);

// Service role client for admin operations (use carefully!)
export const supabaseAdmin: SupabaseClient<Database> = supabaseServiceRoleKey
  ? createClient<Database>(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : supabase;

// Database types
export type Tables = Database['public']['Tables'];
export type Functions = Database['public']['Functions'];
export type Enums = Database['public']['Enums'];
export type CompositeTypes = Database['public']['CompositeTypes'];

// Helper functions for common database operations
export class SupabaseService {
  // Real-time subscriptions
  static subscribeToTable<T extends keyof Tables>(
    table: T,
    filter: string,
    callback: (payload: any) => void
  ) {
    return supabase
      .channel(`${table}-changes`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: table as string,
          filter,
        },
        callback
      )
      .subscribe();
  }

  // File upload
  static async uploadFile(
    bucket: string,
    path: string,
    file: File | Uint8Array,
    options?: {
      cacheControl?: string;
      contentType?: string;
      upsert?: boolean;
    }
  ) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, options);

    return { data, error };
  }

  // Get public URL for files
  static getPublicUrl(bucket: string, path: string) {
    return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
  }

  // Delete file
  static async deleteFile(bucket: string, path: string) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([path]);

    return { data, error };
  }
}

export default supabase;