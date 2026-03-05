document.getElementById("formProduksi").addEventListener("submit", function (event) {

    event.preventDefault();
    // 1. Inisialisasi data biaya produksi
    let biayaBahanBaku = Number(document.getElementById("bahanBaku").value);
    let biayaTenagaKerja = Number(document.getElementById("tenagaKerja").value);
    let biayaOverhead = Number(document.getElementById("overhead").value);
    let totalProduksi = Number(document.getElementById("jumlahProduksi").value);


    // 2. Validasi input jumlah produksi agar tidak negatif atau nol
    if (totalProduksi <= 0) {
        output.textContent = "Jumlah produksi tidak valid.";
        console.log("Jumlah produksi tidak valid.");
        return;
    }

    // 3. Perhitungan biaya total per unit produksi
    let totalPerUnit =
        (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

    // 4. Penentuan status efisiensi biaya berdasarkan jumlah produksi
    let status;
    if (jumlahProduksi < 100) {
        status = "Biaya Tinggi (Ekonomi Skala Kecil)";
    } else {
        status = "Biaya Efisien";
    }

    // 5. Menampilkan hasil perhitungan pada halaman web
    let output = document.getElementById("hasilOutput");
    output.innerHTML =
        "Total Biaya per Unit: Rp " + totalPerUnit.toLocaleString("id-ID", { minimumFractionDigits: 2 }) +
        "<br>Status Produksi: " + status;

    // 6. Menampilkan hasil perhitungan pada console untuk dokumentasi
    console.log("===== HASIL PERHITUNGAN =====");
    console.log("Biaya Bahan Baku: Rp", biayaBahanBaku.toLocaleString("id-ID"));
    console.log("Biaya Tenaga Kerja: Rp", biayaTenagaKerja.toLocaleString("id-ID"));
    console.log("Biaya Overhead: Rp", biayaOverhead.toLocaleString("id-ID"));
    console.log("Jumlah Produksi:", jumlahProduksi, "unit");
    console.log("Total Biaya per Unit: Rp", totalPerUnit.toFixed(2));
    console.log("Status Produksi:", status);
    console.log("=============================");
});