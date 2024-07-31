import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function StatItem({ stat }) {
  return (<View style={styles.statItem}>
    <Text style={styles.statName}>{stat.statName}</Text>
    <Text style={styles.statValue}>{stat.value}</Text>
  </View>)
}

const styles = StyleSheet.create({
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  statName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
