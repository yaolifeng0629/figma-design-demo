/**
 * track.tsx
 *
 * Track tab screen - transaction tracking and monitoring interface
 * Part of the 5-tab navigation system matching the provided design
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

/**
 * TrackScreen - Transaction tracking and monitoring screen
 *
 * Displays interface for tracking money transfers and transaction status
 */
export default function TrackScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Track
          </ThemedText>

          <ThemedText style={styles.description}>
            Track your money transfers and view transaction history.
          </ThemedText>

          {/* Placeholder content - can be expanded with actual tracking interface */}
          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              🔄 Active Transfers
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              Track your ongoing money transfers
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              📊 Transaction History
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              View completed and pending transactions
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
