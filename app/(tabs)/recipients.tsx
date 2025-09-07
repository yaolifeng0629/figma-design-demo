/**
 * recipients.tsx
 *
 * Recipients tab screen - displays recipient management interface
 * Part of the 5-tab navigation system matching the provided design
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

/**
 * RecipientsScreen - Main recipients management screen
 *
 * Displays interface for managing and selecting recipients
 * for money transfer operations
 */
export default function RecipientsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Recipients
          </ThemedText>

          <ThemedText style={styles.description}>
            Manage your recipients and contacts for easy money transfers.
          </ThemedText>

          {/* Placeholder content - can be expanded with actual recipient list */}
          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              👥 Recipients List
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              Your saved recipients will appear here
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
