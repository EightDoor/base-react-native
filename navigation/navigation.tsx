import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/home/home';
import My from '../pages/my/my';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';


const Tab = createBottomTabNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar style="auto" /> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any = '';
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'My') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
      <Tab.Screen name="Home" component={Home} options={{title: "首页"}} ></Tab.Screen>
      <Tab.Screen name="My" component={My} options={{title: "我的"}}></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigation