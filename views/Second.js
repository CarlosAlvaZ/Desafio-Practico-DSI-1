import { StyleSheet, Text, View, FlatList } from 'react-native';
import StatItem from '../components/StatItem';
import fcBarcelonaStats from '../data/localStats';

export default function Second() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>FC Barcelona Match Stats</Text>
      <FlatList
        data={fcBarcelonaStats}
        keyExtractor={(item) => item.statName}
        renderItem={({ item }) => (
          <StatItem stat={item} />
        )}
      />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#333',
  },
});
