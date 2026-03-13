// Array data cacat produksi
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"];

// Ambil elemen DOM
const btnTampil = document.getElementById("btnTampil");
const hasilOutput = document.getElementById("hasilOutput");
const rekapTable = document.getElementById("rekapTable");

btnTampil.addEventListener("click", function() {
    // Variabel penghitung
    let jumlahC001 = 0;

    // Loop untuk mengecek jumlah C-001
    for (let i = 0; i < daftarCacat.length; i++) {
        if (daftarCacat[i] === "C-001") {
            jumlahC001++;
        }
    }

    // Output ke web
    hasilOutput.innerHTML = `Daftar Cacat: [${daftarCacat.join(", ")}]<br>Jumlah "C-001" muncul: ${jumlahC001}`;

    // Update rekap tabel
    rekapTable.innerHTML = `
        <tr><td>Daftar Cacat</td><td>[${daftarCacat.join(", ")}]</td></tr>
        <tr><td>Jumlah C-001</td><td>${jumlahC001}</td></tr>
    `;

    // Output ke console
    console.log("=== CEK CACAT ===");
    console.log("Data:", daftarCacat);
    console.log("Jumlah C-001:", jumlahC001);
});