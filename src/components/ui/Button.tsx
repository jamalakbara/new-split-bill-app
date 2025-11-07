import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from './ThemeProvider';
import { BaseButtonProps } from '@/types';

const Button: React.FC<BaseButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
}) => {
  const { colors, typography } = useTheme();

  const getButtonStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    };

    // Size styles
    const sizeStyles = {
      sm: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 36,
      },
      md: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        minHeight: 48,
      },
      lg: {
        paddingHorizontal: 32,
        paddingVertical: 16,
        minHeight: 56,
      },
    };

    // Variant styles (following black/white theme)
    const variantStyles = {
      primary: {
        backgroundColor: colors.primary, // Black
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4,
      },
      secondary: {
        backgroundColor: colors.background.primary, // White
        borderWidth: 1,
        borderColor: colors.border.light,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: colors.primary, // Black
      },
    };

    // State styles
    const stateStyles = disabled
      ? {
          opacity: 0.5,
        }
      : {};

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
      ...stateStyles,
    };
  };

  const getTextStyles = (): TextStyle => {
    const baseStyle: TextStyle = {
      fontFamily: typography.fontFamily.primary,
      fontWeight: typography.fontWeight.semibold,
      letterSpacing: 0.5,
    };

    // Size styles
    const sizeStyles = {
      sm: {
        fontSize: typography.fontSize.sm,
      },
      md: {
        fontSize: typography.fontSize.base,
      },
      lg: {
        fontSize: typography.fontSize.lg,
      },
    };

    // Variant styles (following black/white theme)
    const variantStyles = {
      primary: {
        color: colors.secondary, // White text on black
      },
      secondary: {
        color: colors.text.primary, // Black text on white
      },
      outline: {
        color: colors.primary, // Black text on outline button
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyles()]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? colors.secondary : colors.primary}
          style={styles.loader}
        />
      ) : (
        <>
          <Text style={getTextStyles()}>{title}</Text>
          {icon && <Text style={styles.icon}>{icon}</Text>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  loader: {
    marginRight: 8,
  },
  icon: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default Button;