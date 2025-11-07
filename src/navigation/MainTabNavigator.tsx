import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabParamList } from '@/types';
import { useTheme } from '@/components/ui';
import {
  Dashboard,
  ReceiptLong,
  People,
  Person
} from '@/components/ui/Icons';

const Tab = createBottomTabNavigator<MainTabParamList>();

// Import screens (we'll create these later)
const DashboardScreen = React.lazy(() => import('@/screens/dashboard/DashboardScreen'));
const BillsScreen = React.lazy(() => import('@/screens/bills/BillsScreen'));
const FriendsScreen = React.lazy(() => import('@/screens/friends/FriendsScreen'));
const ProfileScreen = React.lazy(() => import('@/screens/profile/ProfileScreen'));

const MainTabNavigator: React.FC = () => {
  const { colors, spacing } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.primary,
          borderTopColor: colors.border.light,
          borderTopWidth: 1,
          paddingBottom: spacing.sm,
          paddingTop: spacing.sm,
          height: 80,
        },
        tabBarActiveTintColor: colors.primary, // Black for active tabs
        tabBarInactiveTintColor: colors.text.secondary, // Gray for inactive tabs
        tabBarLabelStyle: {
          fontFamily: 'Inter',
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size, focused }) => (
            <Dashboard
              name="home"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bills"
        component={BillsScreen}
        options={{
          tabBarLabel: 'Bills',
          tabBarIcon: ({ color, size, focused }) => (
            <ReceiptLong
              name="receipt"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({ color, size, focused }) => (
            <People
              name="people"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <Person
              name="person"
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;