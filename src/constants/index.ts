// Design System Constants
// Export all design tokens for consistent usage across the app

export * from './colors';
export * from './typography';
export * from './spacing';

// Common dimensions
export const Dimensions = {
  // Screen breakpoints
  screen: {
    sm: 375,   // iPhone SE
    md: 414,   // iPhone Pro
    lg: 768,   // iPad mini
    xl: 1024,  // iPad
    '2xl': 1280, // iPad Pro
  },

  // Component dimensions
  component: {
    buttonHeight: 48,
    inputHeight: 48,
    iconSize: 24,
    avatarSize: {
      sm: 32,
      md: 48,
      lg: 64,
      xl: 96,
    },
    cardMinHeight: 72,
    headerHeight: 64,
    tabBarHeight: 80,
  },
};

// Animation durations
export const Animation = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },

  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Breakpoint helpers
export const isSmallScreen = (width: number): boolean => width < Dimensions.screen.md;
export const isMediumScreen = (width: number): boolean =>
  width >= Dimensions.screen.md && width < Dimensions.screen.lg;
export const isLargeScreen = (width: number): boolean => width >= Dimensions.screen.lg;