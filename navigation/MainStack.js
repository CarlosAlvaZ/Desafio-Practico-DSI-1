import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainBottomTabs from './MainBottomTabs';
import Item from '../views/Item';

const Stack = createNativeStackNavigator()

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainDrawer' component={MainBottomTabs} options={{ headerTintColor: "#fff", headerShown: true, title: "Plantilla del Barcelona", headerStyle: { backgroundColor: "#A50044" }, navigationBarColor: "#A50044" }} />
      <Stack.Screen name='Player' component={Item} options={{ headerTintColor: "#EDBB00", navigationBarColor: "#004D98", headerStyle: { backgroundColor: "#A50044" } }} />
    </Stack.Navigator>
  );
}
