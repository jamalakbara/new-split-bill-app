import { ClerkProvider, ClerkLoaded, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from './tokenCache';
import { ReactNode } from 'react';
import { supabase } from './supabase';

const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error('Missing Clerk Publishable Key. Please add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file');
}

// Clerk configuration
const clerkConfig = {
  publishableKey: clerkPublishableKey,
  tokenCache,
};

// Clerk provider wrapper
export const ClerkAppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider {...clerkConfig}>
      <ClerkLoaded>
        <SupabaseIntegration>
          {children}
        </SupabaseIntegration>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

// Component to integrate Clerk auth with Supabase
const SupabaseIntegration: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isSignedIn, userId, getToken } = useAuth();

  React.useEffect(() => {
    const syncAuth = async () => {
      if (isSignedIn && userId) {
        try {
          // Get the Clerk JWT token
          const token = await getToken();

          if (token) {
            // Set the Supabase auth token using Clerk's JWT
            await supabase.auth.setSession({
              access_token: token,
              refresh_token: token, // Clerk handles refresh automatically
            });
          }
        } catch (error) {
          console.error('Error syncing auth with Supabase:', error);
        }
      } else {
        // Sign out from Supabase when Clerk signs out
        await supabase.auth.signOut();
      }
    };

    syncAuth();
  }, [isSignedIn, userId, getToken]);

  return <>{children}</>;
};

// Custom hook for Clerk auth
export const useClerkAuth = () => {
  const { isSignedIn, userId, sessionId, signOut, user } = useAuth();

  return {
    isSignedIn,
    userId,
    sessionId,
    signOut,
    user,
    isAuthenticated: !!isSignedIn,
  };
};

export default clerkConfig;