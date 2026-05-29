import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import TambahScreen from '../screens/TambahScreen'; // Latihan 2

// Membukan Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Gudang Ind. v1.0' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Barang' }} />
      <Stack.Screen name="Tambah" component={TambahScreen} options={{ title: 'Tambah Inventori' }} /> 
    </Stack.Navigator>
  );
}