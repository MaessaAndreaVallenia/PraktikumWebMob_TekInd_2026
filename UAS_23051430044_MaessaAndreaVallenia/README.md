## Struktur Proyek

Aplikasi ini menggunakan komponen React Native modern dengan pembagian halaman terstruktur di dalam folder `screens/`:

1. App.js Menjadi entry-point utama aplikasi yang membungkus seluruh sistem navigasi (Navigation Container dan Stack Navigator).
2. screens/HomeScreen.js` Halaman beranda utama yang menyajikan daftar data (list). Dilengkapi dengan navigasi aktif yang mengarahkan pengguna ke halaman detail ketika salah satu item dklik.
3. `screens/DetailScreen.js` Halaman yang bertugas menangkap data dari parameter navigasi halaman beranda, lalu menampilkan informasi detail secara mendalam dan terstruktur dengan desain UI/UX yang responsif.

## Langkah-langkah Awal

# 1. Masuk ke dalam folder proyek UAS 
UAS_23051430044_MaessaAndreaVallenia

# 2. Instal paket pendukung agar aplikasi React Native 
npx expo install react-native-web react-dom @expo/metro-runtime

# 3. Jalankan server (untuk mobile view bawaan vsc)
npx expo start --web
