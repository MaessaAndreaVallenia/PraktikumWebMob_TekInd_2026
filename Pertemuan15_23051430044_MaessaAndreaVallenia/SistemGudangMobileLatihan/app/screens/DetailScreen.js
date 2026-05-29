import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

function DetailScreen({ route, navigation }) {
  const { itemData } = route.params;

  const handleEmergencyRequest = () => {
    Alert.alert(
      "Request Dikirim",
      `Permintaan stok darurat untuk ${itemData.nama} telah diteruskan ke pusat!`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nama Barang:</Text>
        <Text style={styles.value}>{itemData.nama}</Text>

        <Text style={styles.label}>Stok Saat Ini:</Text>
        <Text style={[styles.value, itemData.stok == 0 ? styles.dangerText : styles.successText]}>
          {itemData.stok} Unit
        </Text>

        <Text style={styles.label}>Lokasi Penyimpanan:</Text>
        <Text style={styles.value}>{itemData.lokasi}</Text>
      </View>

      // LATIHAN 1: CONDITIONAL RENDERING TOMBOL DARURAT            
      {itemData.stok == 0 && (
        <View style={styles.emergencyButtonContainer}>
          <Button 
            title="⚠️ Request Stok Darurat" 
            color="#e74c3c" 
            onPress={handleEmergencyRequest} 
          />
        </View>
      )}

      <Button title="Kembali ke Daftar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 3 },
  label: { fontSize: 14, color: '#7f8c8d', marginTop: 10 },
  value: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50' },
  dangerText: { color: 'red' },
  successText: { color: 'green' },
  emergencyButtonContainer: { marginBottom: 15 }
});

export default DetailScreen;