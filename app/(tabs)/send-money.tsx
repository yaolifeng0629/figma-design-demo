/**
 * send-money.tsx
 *
 * Send Money tab screen - main money transfer interface
 * This is the prominent center tab with orange circular button
 */

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

/**
 * SendMoneyScreen - Main money transfer screen
 *
 * Primary interface for sending money transfers
 * Accessed via the prominent orange center button
 */
export default function SendMoneyScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ThemedView style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Send Money
          </ThemedText>

          <ThemedText style={styles.description}>
            Send money quickly and securely to friends, family, or businesses.
          </ThemedText>

          {/* Placeholder content - can be expanded with actual send money form */}
          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              💸 Quick Transfer
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              Select recipient and amount to send money
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.placeholderContainer}>
            <ThemedText type="subtitle">
              📱 Recent Transfers
            </ThemedText>
            <ThemedText style={styles.placeholderText}>
              Your recent money transfers will appear here
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
