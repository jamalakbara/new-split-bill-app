// Supabase Database Type Definitions
// This file defines the database schema that matches our Supabase setup

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          clerk_id: string; // Foreign key to Clerk user ID
          email: string;
          username: string;
          full_name: string;
          avatar_url: string | null;
          phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>>;
      };
      bills: {
        Row: {
          id: string;
          creator_id: string;
          title: string;
          description: string | null;
          amount: number;
          category: string;
          receipt_url: string | null;
          status: 'active' | 'settled' | 'cancelled';
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['bills']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['bills']['Row'], 'id' | 'created_at'>>;
      };
      bill_participants: {
        Row: {
          id: string;
          bill_id: string;
          user_id: string;
          amount_owed: number;
          amount_paid: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['bill_participants']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['bill_participants']['Row'], 'id' | 'created_at'>>;
      };
      friendships: {
        Row: {
          id: string;
          user_id: string;
          friend_id: string;
          status: 'pending' | 'accepted';
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['friendships']['Row'], 'id' | 'created_at'>;
        Update: Partial<Omit<Database['public']['Tables']['friendships']['Row'], 'id' | 'created_at'>>;
      };
      groups: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_by: string;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['groups']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['groups']['Row'], 'id' | 'created_at'>>;
      };
      group_members: {
        Row: {
          id: string;
          group_id: string;
          user_id: string;
          role: 'admin' | 'member';
          joined_at: string;
        };
        Insert: Omit<Database['public']['Tables']['group_members']['Row'], 'id' | 'joined_at'>;
        Update: Partial<Omit<Database['public']['Tables']['group_members']['Row'], 'id' | 'joined_at'>>;
      };
      payments: {
        Row: {
          id: string;
          bill_id: string;
          payer_id: string;
          payee_id: string;
          amount: number;
          status: 'pending' | 'completed' | 'failed';
          method: string | null;
          created_at: string;
          completed_at: string | null;
        };
        Insert: Omit<Database['public']['Tables']['payments']['Row'], 'id' | 'created_at'>;
        Update: Partial<Omit<Database['public']['Tables']['payments']['Row'], 'id' | 'created_at'>>;
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          type: 'bill_created' | 'payment_received' | 'payment_requested' | 'friend_request' | 'group_invite';
          title: string;
          message: string;
          data: Record<string, any> | null; // JSON data for additional context
          read: boolean;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['notifications']['Row'], 'id' | 'created_at'>;
        Update: Partial<Omit<Database['public']['Tables']['notifications']['Row'], 'id' | 'created_at'>>;
      };
      user_preferences: {
        Row: {
          id: string;
          user_id: string;
          theme: 'light' | 'dark' | 'system';
          notifications_push: boolean;
          notifications_email: boolean;
          notifications_bills: boolean;
          notifications_payments: boolean;
          notifications_friend_requests: boolean;
          privacy_profile_visibility: 'public' | 'friends' | 'private';
          privacy_show_phone: boolean;
          privacy_show_email: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['user_preferences']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<Database['public']['Tables']['user_preferences']['Row'], 'id' | 'created_at'>>;
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      bill_status: 'active' | 'settled' | 'cancelled';
      friendship_status: 'pending' | 'accepted';
      group_role: 'admin' | 'member';
      payment_status: 'pending' | 'completed' | 'failed';
      notification_type: 'bill_created' | 'payment_received' | 'payment_requested' | 'friend_request' | 'group_invite';
      theme: 'light' | 'dark' | 'system';
      privacy_profile_visibility: 'public' | 'friends' | 'private';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Export helper types for easier usage
export type User = Database['public']['Tables']['users']['Row'];
export type Bill = Database['public']['Tables']['bills']['Row'];
export type BillParticipant = Database['public']['Tables']['bill_participants']['Row'];
export type Friendship = Database['public']['Tables']['friendships']['Row'];
export type Group = Database['public']['Tables']['groups']['Row'];
export type GroupMember = Database['public']['Tables']['group_members']['Row'];
export type Payment = Database['public']['Tables']['payments']['Row'];
export type Notification = Database['public']['Tables']['notifications']['Row'];
export type UserPreference = Database['public']['Tables']['user_preferences']['Row'];