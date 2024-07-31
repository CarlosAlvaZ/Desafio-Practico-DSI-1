import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView } from 'react-native';
import localData from '../data/localData';
import ListItem from '../components/ListItem';

export default function Main({ navigation }) {
  return (
    <ScrollView>
      {
        localData.map((item, i) => (<ListItem key={i} player={item} onPress={() => navigation.navigate("Player", { player: item })} />))
      }
      <StatusBar style='dark' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'stretch',
    padding: 0,
    justifyContent: 'flex-start',
  }
});
