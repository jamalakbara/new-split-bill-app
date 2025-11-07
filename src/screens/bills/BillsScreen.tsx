import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/ui';

const BillsScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text.primary, fontSize: 24, fontFamily: 'Inter', fontWeight: 'bold' }}>
        Bills
      </Text>
      <Text style={{ color: colors.text.secondary, marginTop: 8, fontFamily: 'Inter' }}>
        Following /design/create_new_bill/ specifications
      </Text>
    </View>
  );
};

export default BillsScreen;
