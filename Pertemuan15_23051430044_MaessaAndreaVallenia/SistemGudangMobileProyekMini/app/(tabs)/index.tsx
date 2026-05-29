import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import TambahScreen from '../screens/TambahScreen'; 

// Membukan Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Quality Control System' }} 
      />
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen} 
        options={{ title: 'Lembar Inspeksi QC' }} 
      />
      <Stack.Screen 
        name="Tambah" 
        component={TambahScreen} 
        options={{ title: 'Tambah Item QC' }} 
      />
    </Stack.Navigator>
  );
}