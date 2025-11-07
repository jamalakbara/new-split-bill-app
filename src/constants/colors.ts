// Design Tokens - Color Palette
// Based on the updated black and white theme from DESIGN_ANALYSIS.md

export const Colors = {
  // Primary Colors
  primary: '#000000', // Black
  secondary: '#FFFFFF', // White

  // Background Colors
  background: {
    light: '#F8F9FA',
    dark: '#1A1A1A',
    primary: '#FFFFFF', // White primary background
  },

  // Gray Scale
  gray: {
    50: '#F8F9FA',   // Lightest gray
    100: '#E9ECEF',  // Light gray
    200: '#DEE2E6',
    300: '#CED4DA',
    400: '#ADB5BD',
    500: '#6C757D',  // Medium gray
    600: '#495057',
    700: '#343A40',  // Dark gray
    800: '#212529',
    900: '#1A1A1A',  // Darkest gray
  },

  // Text Colors
  text: {
    primary: '#212529',    // Primary text color
    secondary: '#6C757D',  // Secondary text
    tertiary: '#ADB5BD',   // Tertiary text
    inverse: '#F8F9FA',    // Light text on dark backgrounds
    muted: '#6C757D',      // Muted text
  },

  // Border Colors
  border: {
    light: '#E9ECEF',
    medium: '#CED4DA',
    dark: '#495057',
  },

  // Status Colors
  status: {
    success: '#28A745',
    warning: '#FFC107',
    error: '#DC3545',
    info: '#17A2B8',
  },

  // Overlay Colors
  overlay: {
    light: 'rgba(248, 249, 250, 0.9)',
    dark: 'rgba(26, 26, 26, 0.9)',
    medium: 'rgba(0, 0, 0, 0.5)',
  },

  // Shadow Colors
  shadow: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.15)',
    dark: 'rgba(0, 0, 0, 0.25)',
  },
};

// Semantic color aliases for easier usage
export const SemanticColors = {
  // Interactive elements
  button: {
    primary: Colors.primary,
    secondary: Colors.text.secondary,
    disabled: Colors.gray[300],
  },

  // Input elements
  input: {
    background: Colors.background.primary,
    border: Colors.border.light,
    text: Colors.text.primary,
    placeholder: Colors.text.tertiary,
    focused: Colors.primary,
  },

  // Card and container backgrounds
  card: {
    background: Colors.background.primary,
    border: Colors.border.light,
    shadow: Colors.shadow.light,
  },

  // Navigation
  navigation: {
    background: Colors.background.primary,
    border: Colors.border.light,
    text: Colors.text.primary,
    active: Colors.primary,
  },

  // Status indicators
  status: {
    paid: Colors.status.success,
    pending: Colors.status.warning,
    overdue: Colors.status.error,
  },
};