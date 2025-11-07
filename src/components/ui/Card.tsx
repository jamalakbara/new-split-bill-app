import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { useTheme } from './ThemeProvider';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  style,
  onPress,
  shadow = 'md',
  margin = 'md',
}) => {
  const { colors, spacing, shadows } = useTheme();

  const cardStyles: ViewStyle = {
    backgroundColor: colors.card.background,
    borderColor: colors.card.border,
    borderWidth: 1,
    borderRadius: 12,
    margin: spacing[margin],
    ...shadows[shadow],
  };

  if (onPress) {
    return (
      <TouchableOpacity
        style={[styles.card, cardStyles, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.card, cardStyles, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    minHeight: 72,
  },
});

export default Card;