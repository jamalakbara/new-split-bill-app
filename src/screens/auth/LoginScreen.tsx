import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/ui';

const LoginScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text.primary, fontSize: 24, fontFamily: 'Inter', fontWeight: 'bold' }}>
        Login Screen
      </Text>
      <Text style={{ color: colors.text.secondary, marginTop: 8, fontFamily: 'Inter' }}>
        This will be implemented following /design/login/ specifications
      </Text>
    </View>
  );
};

export default LoginScreen;