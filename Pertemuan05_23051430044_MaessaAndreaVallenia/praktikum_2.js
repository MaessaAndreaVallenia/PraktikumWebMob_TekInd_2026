// 2. ARRAY
let daftarCacat = ["C-001", "C-005", "C-012", "C-001", "C-020"]; // C-001 terjadi 2 kali
console.log("Jumlah Cacat: " + daftarCacat.length);
// Looping (Perulangan) untuk menampilkan setiap cacat
console.log("--- Laporan Detail Cacat ---");
for (let i = 0; i < daftarCacat.length; i++) {
 console.log("Item ke-" + (i + 1) + " : " + daftarCacat[i]);
}
// Menambahkan data baru ke array
daftarCacat.push("C-099");
console.log("Setelah penambahan: " + daftarCacat);

// TAMBAHAN AGAR TAMPIL DI WEB

const btn = document.getElementById("btnTampil");
const tabel = document.getElementById("rekapTable");
const output = document.getElementById("hasilOutput");


btn.addEventListener("click", function () {

    // hapus tulisan awal
    if (tabel.children[0].children[0].colSpan) {
        tabel.innerHTML = "";
    }

    // tampil jumlah
    output.innerHTML =
        "Jumlah data cacat = " + daftarCacat.length;

    // looping tampil di tabel
    for (let i = 0; i < daftarCacat.length; i++) {

        let row = document.createElement("tr");

        row.innerHTML =
            "<td>" + (i + 1) + "</td>" +
            "<td>" + daftarCacat[i] + "</td>";

        tabel.appendChild(row);

    }

});