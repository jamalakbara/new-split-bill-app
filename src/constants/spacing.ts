// Design Tokens - Spacing
// Consistent spacing system based on the design specifications

export const Spacing = {
  // Base spacing unit (4px)
  unit: 4,

  // Spacing scale (multiples of base unit)
  xs: 4,      // 0.25rem  - Used for tight spacing
  sm: 8,      // 0.5rem   - Small gaps
  md: 16,     // 1rem     - Default spacing
  lg: 24,     // 1.5rem   - Larger gaps
  xl: 32,     // 2rem     - Extra large spacing
  '2xl': 48,  // 3rem     - Section spacing
  '3xl': 64,  // 4rem     - Large section spacing
  '4xl': 96,  // 6rem     - Page spacing
  '5xl': 128, // 8rem     - Hero section spacing
};

// Border radius values based on design specifications
export const BorderRadius = {
  none: 0,
  sm: 2,       // Small radius
  base: 4,     // Default radius (0.25rem)
  md: 8,       // Medium radius (0.5rem)
  lg: 12,      // Large radius (0.75rem)
  xl: 16,      // Extra large radius (1rem)
  '2xl': 24,   // 2xl radius (1.5rem)
  '3xl': 32,   // 3xl radius (2rem)
  full: 9999,  // Full circle
};

// Shadow definitions for elevated elements
export const Shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  base: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
  },
  xl: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 24,
  },
};

// Z-index values for layering
export const ZIndex = {
  // Content layers
  content: 1,
  overlay: 10,
  dropdown: 20,
  sticky: 30,

  // Navigation layers
  header: 40,
  sidebar: 50,
  modal: 60,
  tooltip: 70,

  // UI elements
  notification: 80,
  loading: 90,
  max: 100,
};

// Common spacing combinations
export const SpacingPresets = {
  // Container padding
  container: {
    padding: Spacing.md,
  },

  // Card spacing
  card: {
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.md,
  },

  // Section spacing
  section: {
    padding: Spacing.lg,
    marginBottom: Spacing.xl,
  },

  // List item spacing
  listItem: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderBottomWidth: 1,
  },

  // Button spacing
  button: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
  },

  // Form field spacing
  formField: {
    marginBottom: Spacing.md,
  },

  // Input spacing
  input: {
    padding: Spacing.sm,
    borderRadius: BorderRadius.base,
    borderWidth: 1,
  },
};

// Helper functions for responsive spacing
export const createSpacing = (multiplier: number): number => Spacing.unit * multiplier;

export const createResponsiveStyle = (
  vertical: keyof typeof Spacing,
  horizontal: keyof typeof Spacing
) => ({
  paddingVertical: Spacing[vertical],
  paddingHorizontal: Spacing[horizontal],
});