import React, { useState } from 'react'; 
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  Platform, 
  StatusBar 
} from 'react-native';

export default function DetailScreen({ route, navigation }) {
  const { item } = route.params;
  const [localStok, setLocalStok] = useState(item.stok);
  const tambahStok = () => {
    setLocalStok(localStok + 1);
  };
  const kurangStok = () => {
    if (localStok > 0) {
      setLocalStok(localStok - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Detail Suku Cadang</Text>
      </View>

      <View style={styles.contentCard}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nama Barang:</Text>
          <Text style={styles.valueName}>{item.namaBarang}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Kategori:</Text>
          <Text style={styles.value}>{item.kategori}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Lokasi Rak:</Text>
          <Text style={styles.valueBadge}>{item.lokasiRak}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Stok Saat Ini:</Text>
          <Text style={styles.valueStok}>{localStok} Unit</Text>
        </View>

        {localStok < 5 && (
          <View style={styles.alertBox}>
            <Text style={styles.alertText}>⚠️ PERINGATAN KRITIS: Stok menipis, segera lakukan restock!</Text>
          </View>
        )}

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.btnKurang} onPress={kurangStok}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnTambah} onPress={tambahStok}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.btnBack} 
        onPress={() => navigation.goBack()} 
      >
        <Text style={styles.btnBackText}>Kembali ke Halaman Utama</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8fafc',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'space-between', 
    padding: 16
  },
  header: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#e2e8f0', marginBottom: 16 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1e293b', textAlign: 'center' },
  
  contentCard: { 
    backgroundColor: '#ffffff', 
    borderRadius: 12, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#cbd5e1',
    flex: 1,
    justifyContent: 'flex-start'
  },
  infoRow: { marginBottom: 16 },
  label: { fontSize: 13, color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: 4 },
  valueName: { fontSize: 18, fontWeight: 'bold', color: '#1e293b' },
  value: { fontSize: 16, color: '#334155', fontWeight: '500' },
  valueBadge: { fontSize: 15, color: '#0f766e', fontWeight: 'bold' },
  valueStok: { fontSize: 22, fontWeight: 'bold', color: '#1e293b' },
  
  alertBox: { backgroundColor: '#fee2e2', padding: 12, borderRadius: 8, borderWidth: 1, borderColor: '#fca5a5', marginTop: 8, marginBottom: 16 },
  alertText: { color: '#b91c1c', fontSize: 13, fontWeight: 'bold', textAlign: 'center' },
  
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#64748b', textAlign: 'center', marginTop: 20, marginBottom: 12 },
  actionRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  btnTambah: { backgroundColor: '#10b981', width: 80, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  btnKurang: { backgroundColor: '#ef4444', width: 80, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: '#ffffff', fontSize: 24, fontWeight: 'bold' },
  
  btnBack: { backgroundColor: '#1e293b', padding: 16, borderRadius: 10, alignItems: 'center', marginTop: 16 },
  btnBackText: { color: '#ffffff', fontSize: 15, fontWeight: 'bold' }
});