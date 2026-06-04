import React, { useState } from 'react'; 
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity, 
  SafeAreaView, 
  Platform, 
  StatusBar,
  TextInput 
} from 'react-native';

const DATA_GUDANG = [
  { id: '1', namaBarang: 'Shaft Linear Guide 20mm', kategori: 'Mekanik', stok: 15, lokasiRak: 'Rak A-02' },
  { id: '2', namaBarang: 'Relay Omron 24VDC', kategori: 'Elektronik', stok: 45, lokasiRak: 'Rak B-05' },
  { id: '3', namaBarang: 'Centrifugal Water Pump 1HP', kategori: 'Mesin', stok: 6, lokasiRak: 'Rak C-01' },
  { id: '4', namaBarang: 'Proximity Sensor Induktif', kategori: 'Sensor', stok: 22, lokasiRak: 'Rak B-02' },
  { id: '5', namaBarang: 'Pneumatic Cylinder DNC', kategori: 'Pneumatik', stok: 11, lokasiRak: 'Rak D-04' },
  { id: '6', namaBarang: 'V-Belt Gates B54', kategori: 'Transmisi', stok: 30, lokasiRak: 'Rak A-09' },
  { id: '7', namaBarang: 'Inverter Delta 1.5kW', kategori: 'Kelistrikan', stok: 4, lokasiRak: 'Rak E-02' },
  { id: '8', namaBarang: 'Coupling Flexible 10x12', kategori: 'Mekanik', stok: 50, lokasiRak: 'Rak A-04' },
  { id: '9', namaBarang: 'Solenoid Valve 5/2 Way', kategori: 'Pneumatik', stok: 18, lokasiRak: 'Rak D-01' },
  { id: '10', namaBarang: 'Digital Panel Meter', kategori: 'Elektronik', stok: 8, lokasiRak: 'Rak B-07' },
];

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSorted, setIsSorted] = useState(false);

  let filteredData = DATA_GUDANG.filter(item => 
    item.namaBarang.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isSorted) {
    filteredData = [...filteredData].sort((a, b) =>
    a.namaBarang.localeCompare(b.namaBarang)
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PT. Logistik Nusantara</Text>
        <Text style={styles.headerSub}>Operator: Maessa Andrea Vallenia (23051430044)</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari nama barang atau kategori mesin..."
          placeholderTextColor="#94a3b8"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} 
        />
      </View>

      <View style={styles.filterActionContainer}>
        <TouchableOpacity
        style={[styles.btnSort, isSorted && styles. btnSortActive]}
        onPress={() => setIsSorted(!isSorted)}
        >
          <Text style={styles.btnSortText}>
            {isSorted ? 'Urutan: A - Z (Aktif)' : 'Urutkan Nama Barang (A - Z)'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData} 
        keyExtractor={item => item.id} 
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <Text style={styles.itemTitle}>{item.namaBarang}</Text>
            <Text style={styles.itemSub}>{item.kategori} • {item.lokasiRak}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8fafc',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  header: { padding: 16, backgroundColor: '#1e293b' },
  headerTitle: { color: '#ffffff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  headerSub: { color: '#94a3b8', fontSize: 12, textAlign: 'center', marginTop: 4, fontWeight: '500' },
  
  searchContainer: { padding: 12, backgroundColor: '#ffffff', borderBottomWidth: 1, borderColor: '#e2e8f0' },
  searchInput: {
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    color: '#1e293b'
  },

  filterActionContainer: { padding: 16, paddingVertical: 8, backgroundColor: '#f8fafc' },
  btnSort: { backgroundColor: '#e2e8f0', padding: 10, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#cbd5e1' },
  btnSortActive: { backgroundColor: '#3b82f6', borderColor: '#2563eb' },
  btnsortText: { color: '#1e293b', fontWeight: 'bold', fontSize: 13 },

  card: { 
    backgroundColor: '#ffffff', 
    padding: 16, 
    marginHorizontal: 16, 
    marginVertical: 6, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1'
  },
  itemTitle: { fontSize: 15, fontWeight: 'bold', color: '#1e293b' },
  itemSub: { fontSize: 12, color: '#64748b', marginTop: 4 }
});