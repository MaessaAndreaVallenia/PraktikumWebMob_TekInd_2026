import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// Membukan Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Gudang Ind. v1.0' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }: any) => ({ title: route.params?.itemData?.nama || 'Detail' })}
      />
    </Stack.Navigator>
  );
}