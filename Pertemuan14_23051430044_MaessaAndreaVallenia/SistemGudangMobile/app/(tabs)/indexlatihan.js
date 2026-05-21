import { StatusBar } from 'expo-status-bar';
// Latihan 2: Menggunakan ScrollView agar daftar gudang yang banyak bisa digulir
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Bagian Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image source={require('./logo.png')} style={styles.logo} />
          <View>
            <Text style={styles.headerTitle}>PT. Manufaktur Maju</Text>
            <Text style={styles.headerSubtitle}>Aplikasi Monitoring Gudang</Text>
          </View>
        </View>
      </View>
      
      {/* ScrollView dengan data gudang yang melimpah (A sampai J) */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={true}>
        <Text style={styles.welcomeText}>Selamat Datang, Operator!</Text>
        
        {/* Kartu Gudang A */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => Alert.alert("Info", "Membuka Detail Stok Gudang A...")}
        >
          <Text style={styles.cardTitle}>Status Gudang A</Text>
          <Text style={styles.cardValue}>Kapasitas: 85%</Text>
          <Text style={styles.cardStatus}>TEKAN UNTUK DETAIL</Text>
        </TouchableOpacity>
        
        {/* Kartu Gudang B */}
        <View style={[styles.card, styles.cardDanger]}>
          <Text style={styles.cardTitle}>Status Gudang B</Text> 
          <Text style={styles.cardValue}>Kapasitas: 95%</Text>
          <Text style={styles.cardStatusDanger}>HAMPIR PENUH</Text>
        </View>

        {/* Kartu Gudang C */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang C</Text> 
          <Text style={styles.cardValue}>Kapasitas: 40%</Text>
          <Text style={styles.cardStatus}>AMAN</Text>
        </View>

        {/* Kartu Gudang D */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang D</Text> 
          <Text style={styles.cardValue}>Kapasitas: 12%</Text>
          <Text style={styles.cardStatusWarning}>SISA SEDIKIT</Text>
        </View>

        {/* Kartu Gudang E */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang E</Text> 
          <Text style={styles.cardValue}>Kapasitas: 65%</Text>
          <Text style={styles.cardStatus}>AMAN</Text>
        </View>

        {/* Kartu Gudang F */}
        <View style={[styles.card, styles.cardDanger]}>
          <Text style={styles.cardTitle}>Status Gudang F (Bahan Kimia)</Text> 
          <Text style={styles.cardValue}>Kapasitas: 100%</Text>
          <Text style={styles.cardStatusDanger}>OVERLOAD / PENUH</Text>
        </View>

        {/* Kartu Gudang G */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang G (Suku Cadang)</Text> 
          <Text style={styles.cardValue}>Kapasitas: 55%</Text>
          <Text style={styles.cardStatus}>AMAN</Text>
        </View>

        {/* Kartu Gudang H */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang H</Text> 
          <Text style={styles.cardValue}>Kapasitas: 78%</Text>
          <Text style={styles.cardStatus}>OPTIMAL</Text>
        </View>

        {/* Kartu Gudang I */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang I (Logistik)</Text> 
          <Text style={styles.cardValue}>Kapasitas: 5%</Text>
          <Text style={styles.cardStatusWarning}>KRITIS / HAMPIR KOSONG</Text>
        </View>

        {/* Kartu Gudang J */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status Gudang J (Pengemasan)</Text> 
          <Text style={styles.cardValue}>Kapasitas: 32%</Text>
          <Text style={styles.cardStatus}>AMAN</Text>
        </View>

        {/* Spacing terbawah agar ketika di-scroll tidak mentok navigasi */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 5,
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
  },
  content: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
    fontWeight: '600',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardDanger: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c', // Garis merah indikator bahaya/penuh
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#27ae60', // Warna hijau stabil
    marginTop: 5,
    textAlign: 'right'
  },
  cardStatusWarning: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f39c12', // Warna oranye peringatan
    marginTop: 5,
    textAlign: 'right'
  },
  cardStatusDanger: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e74c3c', // Warna merah bahaya
    marginTop: 5,
    textAlign: 'right'
  }
});