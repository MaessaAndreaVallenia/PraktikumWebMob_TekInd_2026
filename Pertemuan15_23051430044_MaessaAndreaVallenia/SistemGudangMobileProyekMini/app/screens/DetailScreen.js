import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image, TouchableOpacity, Modal, FlatList } from 'react-native';

function DetailScreen({ route, navigation }) {
  const { itemData } = route.params;
  
  // State untuk status dan mengontrol buka/tutup modal dropdown
  const [selectedStatus, setSelectedStatus] = useState(itemData.status);
  const [modalVisible, setModalVisible] = useState(false);

  // Opsi pilihan dropdown
  const opsiStatus = [
    { label: '-- Pilih Status Inspeksi --', value: 'Belum Diinspeksi', color: '#95a5a6' },
    { label: '🟢 Lolos Kualifikasi', value: 'Lolos', color: '#2ecc71' },
    { label: '🔴 Gagal / Defect', value: 'Gagal', color: '#e74c3c' }
  ];

  const handleSimpanInspeksi = () => {
    if (selectedStatus === 'Belum Diinspeksi' || selectedStatus === 'Belum Diinspeksi') {
      Alert.alert("Peringatan", "Silakan pilih status inspeksi (Lolos/Gagal) terlebih dahulu!");
      return;
    }

    // Mengirim data status kembali ke HomeScreen
    navigation.navigate('Home', {
      updatedId: itemData.id,
      newStatus: selectedStatus
    });
  };

  // Cari label mana yang sedang aktif untuk ditampilkan di tombol dropdown
  const currentLabel = opsiStatus.find(o => o.value === selectedStatus)?.label || '-- Pilih Status Inspeksi --';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Foto Item */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500' }} 
          style={styles.imageHeader}
          resizeMode="cover"
        />

        <Text style={styles.label}>Nama Komponen:</Text>
        <Text style={styles.value}>{itemData.nama}</Text>

        {/* Standar Kualitas */}
        <Text style={styles.label}>Standar Kualitas Mutu:</Text>
        <View style={styles.standarBox}>
          <Text style={styles.standarText}>📋 {itemData.standar}</Text>
        </View>
        
        {/* Dropdown Status Custom */}
        <Text style={styles.label}>Pilih Status Kelayakan:</Text>
        <TouchableOpacity 
          style={styles.dropdownButton} 
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.dropdownButtonText}>{currentLabel}</Text>
          <Text style={styles.arrowIcon}>▼</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.actionContainer}>
        <Button title="💾 Simpan Hasil Inspeksi" color="#2c3e50" onPress={handleSimpanInspeksi} />
        <View style={{ marginTop: 10 }}>
          <Button title="Kembali" color="#7f8c8d" onPress={() => navigation.goBack()} />
        </View>
      </View>

      {/* Pop-up Untuk Pilihan Dropdown */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay} 
          activeOpacity={1} 
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pilih Status Inspeksi QC</Text>
            
            {opsiStatus.map((opsi) => (
              <TouchableOpacity
                key={opsi.value}
                style={styles.optionItem}
                onPress={() => {
                  setSelectedStatus(opsi.value);
                  setModalVisible(false);
                }}
              >
                <Text style={[styles.optionText, { color: opsi.color }]}>
                  {opsi.label}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Batal</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f6fa', justifyContent: 'center' },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 20, elevation: 4 },
  imageHeader: { height: 140, width: '100%', borderRadius: 10, marginBottom: 5 },
  label: { fontSize: 13, color: '#7f8c8d', marginTop: 12, fontWeight: 'bold' },
  value: { fontSize: 17, fontWeight: 'bold', color: '#2c3e50', marginTop: 2 },
  standarBox: { backgroundColor: '#fff5e6', padding: 10, borderRadius: 8, marginTop: 5, borderWidth: 1, borderColor: '#ffe0b2' },
  standarText: { color: '#d35400', fontSize: 13, fontWeight: '500' },
  
  // Style Tombol Dropdown Custom
  dropdownButton: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa', 
    padding: 15, 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    marginTop: 8 
  },
  dropdownButtonText: { fontSize: 14, color: '#2c3e50', fontWeight: '500' },
  arrowIcon: { fontSize: 12, color: '#7f8c8d' },
  actionContainer: { marginTop: 5 },

  // Style Pop-up Modal Dropdown
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: 'white', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  modalTitle: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50', marginBottom: 15, textAlign: 'center' },
  optionItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#f1f2f6', alignItems: 'center' },
  optionText: { fontSize: 15, fontWeight: '600' },
  closeButton: { marginTop: 15, backgroundColor: '#dcdde1', padding: 12, borderRadius: 8, alignItems: 'center' },
  closeButtonText: { color: '#2c3e50', fontWeight: 'bold' }
});

export default DetailScreen;