import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/components/ui';

const FriendsScreen: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background.primary, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: colors.text.primary, fontSize: 24, fontFamily: 'Inter', fontWeight: 'bold' }}>
        Friends
      </Text>
      <Text style={{ color: colors.text.secondary, marginTop: 8, fontFamily: 'Inter' }}>
        Following /design/friend_profile/ specifications
      </Text>
    </View>
  );
};

export default FriendsScreen;
