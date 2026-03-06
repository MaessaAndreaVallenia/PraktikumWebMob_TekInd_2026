const form = document.getElementById("formProduksi");
const output = document.getElementById("hasilOutput");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai input
    let biayaBahanBaku = Number(document.getElementById("bahanBaku").value);
    let biayaTenagaKerja = Number(document.getElementById("tenagaKerja").value);
    let biayaOverhead = Number(document.getElementById("overhead").value);
    let jumlahProduksi = Number(document.getElementById("jumlahProduksi").value);

    // Validasi input
    if (
        isNaN(biayaBahanBaku) || biayaBahanBaku < 0 ||
        isNaN(biayaTenagaKerja) || biayaTenagaKerja < 0 ||
        isNaN(biayaOverhead) || biayaOverhead < 0 ||
        isNaN(jumlahProduksi) || jumlahProduksi < 1
    ) {
        output.innerHTML = "Input tidak valid! Semua nilai harus ≥ 0 dan jumlah produksi ≥ 1.";
        output.className = "status-error fs-5 fw-semibold";
        console.error("Input tidak valid");
        return;
    }

    // Perhitungan total per unit
    let totalPerUnit = (biayaBahanBaku + biayaTenagaKerja + biayaOverhead) / jumlahProduksi;

    // Log rinci di console
    console.log(`%c[${tanggal}] Rincian Perhitungan:`, 'color: blue; font-weight:bold;');
    console.log(`Biaya Bahan Baku: Rp ${biayaBahanBaku.toLocaleString("id-ID")}`);
    console.log(`Biaya Tenaga Kerja: Rp ${biayaTenagaKerja.toLocaleString("id-ID")}`);
    console.log(`Biaya Overhead: Rp ${biayaOverhead.toLocaleString("id-ID")}`);
    console.log(`Jumlah Produksi: ${jumlahProduksi} unit`);
    console.log(`Total Biaya per Unit: Rp ${totalPerUnit.toLocaleString("id-ID")}`);
    console.log(`Status Produksi: ${status}`);

    // Tentukan status produksi
    let status = "";
    let kelasStatus = "";
    if (jumlahProduksi < 100) {
        status = "Biaya Tinggi (Ekonomi Skala Kecil)";
        kelasStatus = "status-tinggi";
    } else {
        status = "Biaya Efisien";
        kelasStatus = "status-efisien";
    }

    // Tampilkan hasil di halaman
    output.innerHTML =
        `Total Biaya per Unit: ${totalPerUnit.toLocaleString("id-ID", { style: "currency", currency: "IDR" })} <br>` +
        `Status Produksi: ${status}`;
    output.className = `${kelasStatus} fs-5 fw-semibold`;

    // Console log warna
    let color = kelasStatus === "status-efisien" ? "green" : "red";
    console.log(`%cStatus Produksi: ${status}`, `color: ${color}; font-weight:bold;`);

    form.reset();
});