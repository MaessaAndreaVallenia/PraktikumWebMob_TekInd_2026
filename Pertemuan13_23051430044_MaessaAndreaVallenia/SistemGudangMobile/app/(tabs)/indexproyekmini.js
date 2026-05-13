import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* --- BAGIAN HEADER --- */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Gears_icon.svg/120px-Gears_icon.svg.png' }} 
            style={styles.logo} 
          />
          <View>
            <Text style={styles.headerTitle}>PT. Manufaktur Maessa Andrea Vallenia</Text>
            <Text style={styles.headerSubtitle}>Profil & Monitoring Mesin No 23051430044</Text>
          </View>
        </View>
      </View>
      
      {/* --- KONTEN UTAMA (SCROLLVIEW) --- */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={true}>
        <Text style={styles.sectionTitle}>Daftar Inventaris Mesin</Text>
        
        {/* PROFIL MESIN 1 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Mesin CNC Router...")}
        >
          {/* Flexbox Row: Foto di kiri, Teks di kanan */}
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Mesin CNC Router 3-Axis</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2022</Text>
            <View style={[styles.statusBadge, styles.badgeActive]}>
              <Text style={styles.statusText}>BEROPERASI</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* PROFIL MESIN 2 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Lengan Robot Las...")}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Lengan Robot Las Otomatis</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2024</Text>
            <View style={[styles.statusBadge, styles.badgeMaintenance]}>
              <Text style={styles.statusText}>PERAWATAN (MAINTENANCE)</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* PROFIL MESIN 3 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Mesin Cetak Injeksi...")}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Mesin Cetak Injeksi Plastik</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2019</Text>
            <View style={[styles.statusBadge, styles.badgeActive]}>
              <Text style={styles.statusText}>BEROPERASI</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* PROFIL MESIN 4 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Kompresor Tekanan...")}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Kompresor Udara Tekanan Tinggi</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2021</Text>
            <View style={[styles.statusBadge, styles.badgeOff]}>
              <Text style={styles.statusText}>MATI (OFF)</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* PROFIL MESIN 5 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Sistem Konveyor...")}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Sistem Sabuk Konveyor Utama</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2020</Text>
            <View style={[styles.statusBadge, styles.badgeActive]}>
              <Text style={styles.statusText}>BEROPERASI</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* PROFIL MESIN 6 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Oven Pengering...")}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Mesin Oven Pengering Cat</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2023</Text>
            <View style={[styles.statusBadge, styles.badgeMaintenance]}>
              <Text style={styles.statusText}>PERAWATAN (MAINTENANCE)</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* PROFIL MESIN 7 */}
        <TouchableOpacity 
          style={styles.machineCard}
          onPress={() => Alert.alert("Detail Mesin", "Membuka log pemeliharaan Forklift...")}
        >
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=150&auto=format&fit=crop' }} 
            style={styles.machineImage} 
          />
          <View style={styles.machineInfo}>
            <Text style={styles.machineName}>Forklift Elektrik Gudang C</Text>
            <Text style={styles.machineYear}>Tahun Pembuatan: 2025</Text>
            <View style={[styles.statusBadge, styles.badgeActive]}>
              <Text style={styles.statusText}>BEROPERASI</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Jarak kosong di bawah */}
        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- BAGIAN STYLING ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    backgroundColor: '#1e293b', 
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 45,
    height: 45,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#94a3b8',
    fontSize: 13,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 15,
  },
  machineCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row', // KUNCI UTAMA: Foto di kiri, Teks di kanan
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  machineImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#e2e8f0', // Warna placeholder kalau gambar loading
  },
  machineInfo: {
    flex: 1, // Agar teks mengambil sisa ruang yang tersedia di kanan
    justifyContent: 'center',
  },
  machineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  machineYear: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },
  statusBadge: {
    alignSelf: 'flex-start', // Biar ukuran kotak badge pas mengikuti panjang teks
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeActive: {
    backgroundColor: '#dcfce7',
  },
  badgeMaintenance: {
    backgroundColor: '#fef9c3',
  },
  badgeOff: {
    backgroundColor: '#fee2e2',
  },
  statusText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#334155',
  },
});