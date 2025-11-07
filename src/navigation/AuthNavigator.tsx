import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from '@/types';
import { useTheme } from '@/components/ui';

const Stack = createStackNavigator<AuthStackParamList>();

// Import screens (we'll create these later)
const LoginScreen = React.lazy(() => import('@/screens/auth/LoginScreen'));
const SignUpScreen = React.lazy(() => import('@/screens/auth/SignUpScreen'));
const ForgotPasswordScreen = React.lazy(() => import('@/screens/auth/ForgotPasswordScreen'));

const AuthNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background.primary },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;