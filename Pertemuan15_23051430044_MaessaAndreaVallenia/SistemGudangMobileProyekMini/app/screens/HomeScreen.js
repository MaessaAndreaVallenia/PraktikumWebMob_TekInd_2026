import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';

function HomeScreen({ navigation, route }) {
  const [dataQC, setDataQC] = useState([
    { id: '1', nama: 'Casing Laptop X5', standar: 'Tidak ada goresan & presisi', status: 'Belum Diinspeksi' },
    { id: '2', nama: 'Baterai Li-ion 4000mAh', standar: 'Tegangan stabil 3.7V - 4.2V', status: 'Belum Diinspeksi' },
    { id: '3', nama: 'Layar LCD 14 Inch', standar: 'Tidak ada dead pixel', status: 'Belum Diinspeksi' },
  ]);

  // useEffect untuk update status dan data item baru
  useEffect(() => {
    // Logika Update Status (Lolos/Gagal) dari DetailScreen
    if (route.params?.updatedId && route.params?.newStatus) {
      const { updatedId, newStatus } = route.params;
      setDataQC(prevData =>
        prevData.map(item =>
          item.id === updatedId ? { ...item, status: newStatus } : item
        )
      );
    }

    // 2. Logika Tangkap Item Baru dari TambahScreen
    if (route.params?.itemBaru) {
      const { itemBaru } = route.params;
      
      // Data agar tidak duplikat
      setDataQC(prevData => {
        const isExist = prevData.some(item => item.nama === itemBaru.nama && item.standar === itemBaru.standar);
        if (!isExist) {
          return [...prevData, itemBaru];
        }
        return prevData;
      });
    }
  }, [route.params?.updatedId, route.params?.newStatus, route.params?.itemBaru]);

  const renderItem = ({ item }) => {
    let statusColor = '#7f8c8d';
    let isFailed = false;

    if (item.status === 'Lolos') {
      statusColor = '#2ecc71';
    } else if (item.status === 'Gagal') {
      statusColor = '#e74c3c';
      isFailed = true;
    }

    return (
      <TouchableOpacity
        style={styles.itemCard}
        onPress={() => navigation.navigate('Detail', { itemData: item })}
      >
        <View style={styles.leftContainer}>
          <Text style={[styles.itemName, isFailed && styles.failedText]}>
            {item.nama}
          </Text>
          <Text style={styles.itemDetail}>Standar: {item.standar}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>📋 Dashboard Inspeksi QC</Text>

      <View style={styles.identityCard}>
        <Text style={styles.studentName}>Maessa Andrea Vallenia</Text>
        <Text style={styles.studentNim}>NIM: 23051430044</Text>
      </View>
      
      <FlatList
        data={dataQC}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.buttonContainer}>
        <Button 
          title="➕ Tambah Item Baru" 
          color="#3498db" 
          onPress={() => navigation.navigate('Tambah')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f6fa', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', marginTop: 15, marginBottom: 5, textAlign: 'center', color: '#2c3e50' },
  listContainer: { paddingBottom: 10 },
  itemCard: {
    backgroundColor: 'white', padding: 15, borderRadius: 10, flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, elevation: 3,
  },
  leftContainer: { flex: 1, paddingRight: 10 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  failedText: { color: '#e74c3c' }, 
  itemDetail: { fontSize: 13, color: '#95a5a6', marginTop: 5 },
  statusBadge: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, minWidth: 80, alignItems: 'center' },
  statusText: { color: 'white', fontSize: 11, fontWeight: 'bold' },
  buttonContainer: { marginTop: 10, marginBottom: 10 },
  
  identityCard: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdc3c7'
  },
  studentName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#34495e'
  },
  studentNim: {
    fontSize: 13,
    color: '#7f8c8d',
    marginTop: 2,
    fontWeight: 'bold',
    letterSpacing: 1
  }
});

export default HomeScreen;