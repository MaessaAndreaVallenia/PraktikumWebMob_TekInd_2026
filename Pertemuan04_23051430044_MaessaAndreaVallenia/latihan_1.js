// 1. Inisialisasi data
let gajiPokok = 3500000;
let jamLembur = 12;

// 2. Hitung tarif lembur per jam
let upahLemburPerJam = (1.5 * gajiPokok) / 173;

// 3. Hitung total bayaran lembur
let totalUpahLembur = upahLemburPerJam * jamLembur;

// 4. Hitung total keseluruhan gaji
let totalGaji = gajiPokok + totalUpahLembur;

// 5. Tampilkan hasil
console.log("Gaji Pokok: Rp " + gajiPokok);
console.log("Upah Lembur per Jam: Rp " + upahLemburPerJam.toFixed(2));
console.log("Total Upah Lembur: Rp " + totalUpahLembur.toFixed(2));
console.log("Total Gaji: Rp " + totalGaji.toFixed(2));