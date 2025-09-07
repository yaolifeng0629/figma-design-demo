/**
 * locations.tsx
 *
 * Locations tab screen - location-based services interface
 * Part of the 5-tab navigation system matching the provided design
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

/**
 * LocationsScreen - Location-based services screen
 *
 * Displays interface for finding nearby locations, ATMs, or service points
 */
export default function LocationsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Locations
          </ThemedText>

          <ThemedText style={styles.description}>
            Find nearby ATMs, branches, and service locations.
          </ThemedText>

          {/* Placeholder content - can be expanded with actual map and location finder */}
          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              📍 Nearby Locations
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              Find ATMs and service centers near you
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              🗺️ Interactive Map
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              View locations on an interactive map
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60, // Account for status bar
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 32,
    lineHeight: 24,
  },
  placeholderContainer: {
    padding: 24,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  placeholderText: {
    marginTop: 8,
    textAlign: 'center',
    opacity: 0.6,
  },
});
