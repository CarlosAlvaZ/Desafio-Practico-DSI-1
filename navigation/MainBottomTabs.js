import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Main from '../views/Main';
import Second from '../views/Second';

const Tab = createMaterialBottomTabNavigator()

export default function MainBottomTabs() {
  return (
    <Tab.Navigator activeColor='#FFED02' inactiveColor='#004D98' activeIndicatorStyle={{ backgroundColor: "#000000" }} barStyle={{ backgroundColor: '#A50044' }}>
      <Tab.Screen name='Home' component={Main} options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='home' color={color} size={26} />) }} />
      <Tab.Screen name='Stats' component={Second} options={{ tabBarLabel: "Estadisticas", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name='information-outline' color={color} size={26} />) }} />
    </Tab.Navigator>
  );
}
