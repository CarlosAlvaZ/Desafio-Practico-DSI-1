import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function ListItem({key, player, onPress }) {
  return (
    <TouchableOpacity key={key} onPress={onPress} style={styles.container}>
      <Image source={{ uri: player.photoURI }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.position}>{player.position}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 14,
    color: '#777',
  },
});
