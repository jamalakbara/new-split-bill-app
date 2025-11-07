import React from 'react';
import { Text, TextStyle } from 'react-native';
import { useTheme } from './ThemeProvider';

interface IconProps {
  name: string;
  size: number;
  color: string;
  focused?: boolean;
}

// Simple icon component using emojis/symbols
// In a real app, you'd use react-native-vector-icons or similar
export const Dashboard: React.FC<IconProps> = ({ size, color }) => (
  <Text style={[styles.icon, { fontSize: size, color }]}>🏠</Text>
);

export const ReceiptLong: React.FC<IconProps> = ({ size, color }) => (
  <Text style={[styles.icon, { fontSize: size, color }]}>🧾</Text>
);

export const People: React.FC<IconProps> = ({ size, color }) => (
  <Text style={[styles.icon, { fontSize: size, color }]}>👥</Text>
);

export const Person: React.FC<IconProps> = ({ size, color }) => (
  <Text style={[styles.icon, { fontSize: size, color }]}>👤</Text>
);

const styles = {
  icon: {
    textAlign: 'center' as const,
    fontFamily: 'System',
  },
};