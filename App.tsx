import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/components/ui';
import { ClerkAppProvider } from '@/services/clerk';
import { store } from '@/store';
import AppNavigator from '@/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ClerkAppProvider>
            <ThemeProvider>
              <AppNavigator />
              <StatusBar style="auto" />
            </ThemeProvider>
          </ClerkAppProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
