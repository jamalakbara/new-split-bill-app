// Design Tokens - Typography
// Based on the Inter font family specification from the design analysis

import { Text, TextStyle } from 'react-native';

export const Typography = {
  // Font Family
  fontFamily: {
    primary: 'Inter', // Main font family
    secondary: 'System', // Fallback system font
  },

  // Font Weights
  fontWeight: {
    light: '300',
    normal: '400',    // Regular
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  // Font Sizes
  fontSize: {
    xs: 12,      // Caption text
    sm: 14,      // Small body text
    base: 16,    // Default body text
    lg: 18,      // Large body text
    xl: 20,      // Small heading
    '2xl': 24,   // Medium heading
    '3xl': 30,   // Large heading
    '4xl': 36,   // Extra large heading
    '5xl': 48,   // Display heading
  },

  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },

  // Letter Spacing
  letterSpacing: {
    tight: -0.5,
    normal: 0,
    wide: 0.5,
    wider: 1,
  },
};

// Predefined text styles for consistency
export const TextStyles = {
  // Heading Styles
  heading: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize['2xl'],
    fontWeight: Typography.fontWeight.bold,
    lineHeight: Typography.lineHeight.tight,
    letterSpacing: Typography.letterSpacing.tight,
    color: '#212529', // From Colors.text.primary
  } as TextStyle,

  subheading: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.xl,
    fontWeight: Typography.fontWeight.semibold,
    lineHeight: Typography.lineHeight.tight,
    color: '#212529',
  } as TextStyle,

  title: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.lg,
    fontWeight: Typography.fontWeight.semibold,
    lineHeight: Typography.lineHeight.normal,
    color: '#212529',
  } as TextStyle,

  // Body Text Styles
  body: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.normal,
    lineHeight: Typography.lineHeight.normal,
    color: '#212529',
  } as TextStyle,

  bodyMedium: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
    lineHeight: Typography.lineHeight.normal,
    color: '#212529',
  } as TextStyle,

  // Small Text Styles
  caption: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.normal,
    lineHeight: Typography.lineHeight.normal,
    color: '#6C757D', // From Colors.text.secondary
  } as TextStyle,

  small: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.xs,
    fontWeight: Typography.fontWeight.normal,
    lineHeight: Typography.lineHeight.tight,
    color: '#6C757D',
  } as TextStyle,

  // Button Text Styles
  buttonText: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.semibold,
    lineHeight: Typography.lineHeight.normal,
    letterSpacing: Typography.letterSpacing.wide,
    color: '#FFFFFF', // White text on dark buttons
  } as TextStyle,

  // Input Styles
  inputText: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.normal,
    lineHeight: Typography.lineHeight.normal,
    color: '#212529',
  } as TextStyle,

  placeholder: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.normal,
    lineHeight: Typography.lineHeight.normal,
    color: '#ADB5BD', // From Colors.text.tertiary
  } as TextStyle,

  // Status and Label Styles
  label: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.sm,
    fontWeight: Typography.fontWeight.medium,
    lineHeight: Typography.lineHeight.tight,
    letterSpacing: Typography.letterSpacing.wide,
    color: '#212529',
    textTransform: 'uppercase' as const,
  } as TextStyle,

  // Link Style
  link: {
    fontFamily: Typography.fontFamily.primary,
    fontSize: Typography.fontSize.base,
    fontWeight: Typography.fontWeight.medium,
    lineHeight: Typography.lineHeight.normal,
    color: '#212529', // Black links in our theme
    textDecorationLine: 'underline' as const,
  } as TextStyle,
};

// Helper function to create custom text styles
export const createTextStyle = (
  size: keyof typeof Typography.fontSize,
  weight: keyof typeof Typography.fontWeight = 'normal',
  color: string = '#212529'
): TextStyle => ({
  fontFamily: Typography.fontFamily.primary,
  fontSize: Typography.fontSize[size],
  fontWeight: Typography.fontWeight[weight],
  color,
});