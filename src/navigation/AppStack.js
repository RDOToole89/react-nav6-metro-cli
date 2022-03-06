import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={HomeScreen} name="Home" />
    </Drawer.Navigator>
  );
};

export default AppStack;
