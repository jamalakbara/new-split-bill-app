import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/ui';

const CreateBillScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text.primary, fontSize: 24, fontFamily: 'Inter', fontWeight: 'bold' }}>
        Create Bill
      </Text>
    </View>
  );
};

export default CreateBillScreen;
