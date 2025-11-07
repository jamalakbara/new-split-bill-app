import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootState } from '@/store';
import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import { RootStackParamList } from '@/types';

const Stack = createStackNavigator<RootStackParamList>();

// Import additional screens (we'll create these later)
const CreateBillScreen = React.lazy(() => import('@/screens/bills/CreateBillScreen'));
const BillPreviewScreen = React.lazy(() => import('@/screens/bills/BillPreviewScreen'));
const FriendProfileScreen = React.lazy(() => import('@/screens/friends/FriendProfileScreen'));
const GroupsScreen = React.lazy(() => import('@/screens/groups/GroupsScreen'));
const SettingsScreen = React.lazy(() => import('@/screens/settings/SettingsScreen'));
const NotificationsScreen = React.lazy(() => import('@/screens/notifications/NotificationsScreen'));
const InsightsScreen = React.lazy(() => import('@/screens/insights/InsightsScreen'));
const OnboardingScreen = React.lazy(() => import('@/screens/auth/OnboardingScreen'));

const AppNavigator: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);
  const { colors } = useTheme();

  // If not authenticated, show auth flow
  if (!isAuthenticated) {
    return (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    );
  }

  // If authenticated but hasn't completed onboarding, show onboarding
  if (user && !user.username) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.background.primary },
          }}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // Main app navigation
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.background.primary },
        }}
      >
        <Stack.Screen name="Dashboard" component={MainTabNavigator} />
        <Stack.Screen name="CreateBill" component={CreateBillScreen} />
        <Stack.Screen name="BillPreview" component={BillPreviewScreen} />
        <Stack.Screen name="FriendProfile" component={FriendProfileScreen} />
        <Stack.Screen name="Groups" component={GroupsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Insights" component={InsightsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;