import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

function TambahScreen({ navigation }) {
  const [nama, setNama] = useState('');
  const [stok, setStok] = useState('');
  const [lokasi, setLokasi] = useState('');

  const handleSimpan = () => {
    Alert.alert("Berhasil", "Data barang baru telah disimpan!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambah Barang Baru</Text>
      
      <View style={styles.form}>
        <Text style={styles.label}>Nama Barang</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Contoh: Baut Baja" 
          value={nama}
          onChangeText={setNama}
        />

        <Text style={styles.label}>Jumlah Stok</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Contoh: 100" 
          keyboardType="numeric"
          value={stok}
          onChangeText={setStok}
        />

        <Text style={styles.label}>Lokasi Rak</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Contoh: Rak C-3" 
          value={lokasi}
          onChangeText={setLokasi}
        />

        <View style={{ marginTop: 20 }}>
          <Button title="Simpan Barang" color="#2ecc71" onPress={handleSimpan} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0', justifyContent: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#2c3e50' },
  form: { backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 3 },
  label: { fontSize: 14, color: '#7f8c8d', marginBottom: 5, marginTop: 10 },
  input: { borderBottomWidth: 1, borderBottomColor: '#bdc3c7', paddingVertical: 8, fontSize: 16, marginBottom: 10 },
});

export default TambahScreen;