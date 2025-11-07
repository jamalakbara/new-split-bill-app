import React, { createContext, useContext, ReactNode } from 'react';
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { AppLoading } from 'expo-font';

// Import design tokens
import { Colors, Typography } from '@/constants';

interface ThemeContextType {
  colors: typeof Colors;
  typography: typeof Typography;
  fonts: {
    loaded: boolean;
    error: boolean | null;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });

  const themeValue: ThemeContextType = {
    colors: Colors,
    typography: Typography,
    fonts: {
      loaded: fontsLoaded,
      error: fontError,
    },
  };

  // Show loading screen while fonts are loading
  if (!fontsLoaded && !fontError) {
    return null; // You can return a loading component here
  }

  // Show error screen if fonts failed to load
  if (fontError) {
    console.error('Error loading fonts:', fontError);
    // You can return an error component here
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Custom hook to get font family with fallback
export const useFontFamily = (weight: keyof typeof Typography.fontWeight = 'normal') => {
  const { fonts } = useTheme();

  if (!fonts.loaded) {
    return Typography.fontFamily.secondary; // Fallback to system font
  }

  const fontMap = {
    '100': 'Inter_100Thin',
    '200': 'Inter_200ExtraLight',
    '300': 'Inter_300Light',
    '400': 'Inter_400Regular',
    '500': 'Inter_500Medium',
    '600': 'Inter_600SemiBold',
    '700': 'Inter_700Bold',
    '800': 'Inter_800ExtraBold',
    '900': 'Inter_900Black',
  };

  return fontMap[weight] || Typography.fontFamily.primary;
};