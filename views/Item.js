import { StyleSheet, Text, View, Image} from 'react-native';

export default function Item({ route }) {
  const { player } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: player.photoURI }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.column}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{player.name}</Text>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{player.age}</Text>
          <Text style={styles.label}>Nationality:</Text>
          <Text style={styles.value}>{player.nationality}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>{player.height}</Text>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>{player.weight}</Text>
          <Text style={styles.label}>Position:</Text>
          <Text style={styles.value}>{player.position}</Text>
          <Text style={styles.label}>Jersey:</Text>
          <Text style={styles.value}>{player.jerseyNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 22,
    marginBottom: 20,
  },
});
