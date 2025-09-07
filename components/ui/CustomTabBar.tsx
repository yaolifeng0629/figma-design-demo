/**
 * CustomTabBar.tsx
 *
 * A custom tab bar component that replicates the design from the provided image.
 * Features a prominent center button (Send Money) with orange circular background
 * and standard tab items for other navigation options.
 *
 * @author Figma Design Team
 * @created 2024-12-19
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import React from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { IconSymbol } from './IconSymbol';

const { width } = Dimensions.get('window');

/**
 * CustomTabBar - Renders a custom bottom tab bar with prominent center button
 *
 * Implements the design pattern where the middle tab (Send Money) is elevated
 * with a circular orange background, while other tabs maintain standard styling.
 *
 * @param state - Navigation state containing route information
 * @param descriptors - Route descriptors with options and navigation
 * @param navigation - Navigation object for handling tab presses
 */
export function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  /**
   * Handles tab press with haptic feedback
   * Provides different feedback for center button vs regular tabs
   */
  const handleTabPress = (route: any, index: number, isFocused: boolean) => {
    // Haptic feedback - stronger for center button
    if (process.env.EXPO_OS === 'ios') {
      const feedbackStyle = index === 2
        ? Haptics.ImpactFeedbackStyle.Medium
        : Haptics.ImpactFeedbackStyle.Light;
      Haptics.impactAsync(feedbackStyle);
    }

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  /**
   * Gets the appropriate icon name for each tab
   */
  const getIconName = (routeName: string) => {
    switch (routeName) {
      case 'index':
        return 'house.fill' as const;
      case 'recipients':
        return 'person.2.fill' as const;
      case 'send-money':
        return 'paperplane.fill' as const;
      case 'track':
        return 'arrow.left.arrow.right' as const;
      case 'locations':
        return 'location.fill' as const;
      default:
        return 'house.fill' as const;
    }
  };

  /**
   * Gets the display label for each tab
   */
  const getTabLabel = (routeName: string): string => {
    switch (routeName) {
      case 'index':
        return 'Home';
      case 'recipients':
        return 'Recipients';
      case 'send-money':
        return 'Send Money';
      case 'track':
        return 'Track';
      case 'locations':
        return 'Locations';
      default:
        return routeName;
    }
  };

  return (
    <View style={[styles.tabBar, { backgroundColor: colors.tabBarBackground }]}>
      {/* Bottom border indicator */}
      <View style={styles.topBorder} />

      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const isCenterButton = index === 2; // Send Money button

          const iconName = getIconName(route.name);
          const label = getTabLabel(route.name);

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => handleTabPress(route, index, isFocused)}
              style={[
                styles.tabItem,
                isCenterButton && styles.centerButton,
              ]}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel={`${label} tab`}
              accessibilityState={{ selected: isFocused }}
            >
              {isCenterButton ? (
                // Center button with orange circular background
                <View style={[styles.centerButtonContainer, { backgroundColor: colors.primaryOrange }]}>
                  <IconSymbol
                    name={iconName as any}
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
              ) : (
                // Regular tab item
                <View style={styles.regularTabContent}>
                  <IconSymbol
                    name={iconName as any}
                    size={24}
                    color={isFocused ? colors.tabIconSelected : colors.tabIconDefault}
                  />
                </View>
              )}

              {/* Tab label */}
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color: isCenterButton
                      ? colors.tabIconSelected
                      : isFocused
                        ? colors.tabIconSelected
                        : colors.tabIconDefault,
                  },
                  isCenterButton && styles.centerButtonLabel,
                ]}
                numberOfLines={1}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main tab bar container
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'ios' ? 88 : 68, // Account for safe area on iOS
    paddingBottom: Platform.OS === 'ios' ? 34 : 8, // iOS safe area bottom padding
    paddingTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  // Top border for visual separation
  topBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#E5E5E7',
  },

  // Container for all tab items
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },

  // Individual tab item styling
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },

  // Center button specific styling
  centerButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -8, // Slight upward adjustment for visual balance
  },

  // Center button circular container
  centerButtonContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    // Add subtle shadow for depth
    ...Platform.select({
      ios: {
        shadowColor: '#FF6B35',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  // Regular tab content container
  regularTabContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  // Tab label text styling
  tabLabel: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
  },

  // Center button label specific styling
  centerButtonLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
});
