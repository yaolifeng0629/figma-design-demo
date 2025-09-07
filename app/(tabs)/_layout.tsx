import { Tabs } from 'expo-router';
import React from 'react';

import { CustomTabBar } from '@/components/ui/CustomTabBar';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

/**
 * TabLayout - Main tab navigation layout
 *
 * Implements a 5-tab navigation system with custom tab bar
 * matching the provided design with prominent center "Send Money" button
 */
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
      }}>

      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />

      {/* Recipients Tab */}
      <Tabs.Screen
        name="recipients"
        options={{
          title: 'Recipients',
          tabBarLabel: 'Recipients',
        }}
      />

      {/* Send Money Tab - Center prominent button */}
      <Tabs.Screen
        name="send-money"
        options={{
          title: 'Send Money',
          tabBarLabel: 'Send Money',
        }}
      />

      {/* Track Tab */}
      <Tabs.Screen
        name="track"
        options={{
          title: 'Track',
          tabBarLabel: 'Track',
        }}
      />

      {/* Locations Tab */}
      <Tabs.Screen
        name="locations"
        options={{
          title: 'Locations',
          tabBarLabel: 'Locations',
        }}
      />
    </Tabs>
  );
}
