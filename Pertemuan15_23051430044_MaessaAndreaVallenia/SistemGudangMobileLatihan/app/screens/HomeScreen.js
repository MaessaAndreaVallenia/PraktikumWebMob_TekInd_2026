import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dataGudang = [
  { id: '1', nama: 'Baut M10', stok: 150, lokasi: 'Rak A1' },
  { id: '2', nama: 'Oli Mesin 20L', stok: 12, lokasi: 'Area B' },
  { id: '3', nama: 'Packing Kayu', stok: 0, lokasi: 'Gudang Belakang' }, 
  { id: '4', nama: 'Mur Ring 12', stok: 0, lokasi: 'Rak A-2' },
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemCard}
      onPress={() => navigation.navigate('Detail', { itemData: item })}
    >
      <View style={styles.leftContainer}>
        <Text style={styles.itemName}>{item.nama}</Text>
        <Text style={styles.itemDetail}>Lokasi: {item.lokasi}</Text>
      </View>
      <View style={styles.stokContainer}>
        <Text style={[styles.itemStok, item.stok === 0 ? styles.dangerText : styles.successText]}>
          {item.stok} Unit
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Daftar Inventori Gudang</Text>
      <FlatList
        data={dataGudang}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      // LATIHAN 2: TOMBOL FAB (TAMBAH BARANG)                   
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => navigation.navigate('Tambah')}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', padding: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, textAlign: 'center', color: '#2c3e50' },
  listContainer: { paddingBottom: 80 }, 
  itemCard: {
    backgroundColor: 'white', padding: 15, borderRadius: 8, flexDirection: 'row', 
    justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, elevation: 2,
  },
  leftContainer: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  itemDetail: { fontSize: 13, color: '#7f8c8d', marginTop: 4 },
  stokContainer: { marginLeft: 10, minWidth: 60, alignItems: 'flex-end' },
  itemStok: { fontSize: 15, fontWeight: 'bold' },
  dangerText: { color: 'red' },
  successText: { color: 'green' },
  
  // STYLE UNTUK FAB (TOMBOL MELAYANG)
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#3498db',
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  fabText: { fontSize: 30, color: 'white', fontWeight: 'bold' },
});

export default HomeScreen;