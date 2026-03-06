document.getElementById("formProduksi").addEventListener("submit", function (event) {

    event.preventDefault();
    // Field input
    let biayaBahanBaku = Number(document.getElementById("bahanBaku").value);
    let biayaTenagaKerja = Number(document.getElementById("tenagaKerja").value);
    let biayaOverhead = Number(document.getElementById("overhead").value);
    let jumlahProduksi = Number(document.getElementById("jumlahProduksi").value);


    // Validasi agar jumlah nya tidak negatif
    if (jumlahProduksi <= 0) {
        output.textContent = "Jumlah produksi tidak valid.";
        console.log("Jumlah produksi tidak valid.");
        return;
    } 
    // Perhitungan biaya total perunit
    let totalPerUnit =
        (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

    // logika if else untuk mengecek jumlah produksi
    let status;
    if (jumlahProduksi < 100) {
        status = "Biaya Tinggi (Ekonomi Skala Kecil)";
    } else {
        status = "Biaya Efisien";
    }

    // Field output hasil dari pemrosesan
    let output = document.getElementById("hasilOutput");
    // Untuk menampilkan di website
    output.innerHTML =
        "Total Biaya per Unit: Rp " + totalPerUnit.toLocaleString("id-ID", { minimumFractionDigits: 2 }) +
        "<br>Status Produksi: " + status;

    // Untuk menampilkan di console
    console.log("===== HASIL PERHITUNGAN =====");
    console.log("Biaya Bahan Baku: Rp", biayaBahanBaku.toLocaleString("id-ID"));
    console.log("Biaya Tenaga Kerja: Rp", biayaTenagaKerja.toLocaleString("id-ID"));
    console.log("Biaya Overhead: Rp", biayaOverhead.toLocaleString("id-ID"));
    console.log("Jumlah Produksi:", jumlahProduksi, "unit");
    console.log("Total Biaya per Unit: Rp", totalPerUnit.toFixed(2));
    console.log("Status Produksi:", status);
    console.log("=============================");
});