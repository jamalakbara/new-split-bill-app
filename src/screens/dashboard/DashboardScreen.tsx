import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/ui';

const DashboardScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text.primary, fontSize: 24, fontFamily: 'Inter', fontWeight: 'bold' }}>
        Dashboard
      </Text>
      <Text style={{ color: colors.text.secondary, marginTop: 8, fontFamily: 'Inter' }}>
        Following /design/dashboard/ specifications
      </Text>
    </View>
  );
};

export default DashboardScreen;