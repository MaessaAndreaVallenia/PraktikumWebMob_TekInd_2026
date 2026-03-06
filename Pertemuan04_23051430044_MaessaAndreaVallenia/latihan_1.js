const form = document.getElementById("formGaji");
const table = document.getElementById("rekapTable");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // ambil data dari form
    const nama = document.getElementById("nama").value;
    const gajiPokok = Number(document.getElementById("gajiPokok").value);
    const jamLembur = Number(document.getElementById("jamLembur").value);

    // perhitungan
    const upahLemburPerJam = (1.5 * gajiPokok) / 173;
    const totalUpahLembur = upahLemburPerJam * jamLembur;
    const totalGaji = gajiPokok + totalUpahLembur;

    // console rincian
    console.log("=== RINCIAN PERHITUNGAN ===");
    console.log("Nama: " + nama);
    console.log("Gaji Pokok: Rp " + gajiPokok);
    console.log("Jam Lembur: " + jamLembur);
    console.log("Upah Lembur/Jam: Rp " + upahLemburPerJam.toFixed(2));
    console.log("Total Upah Lembur: Rp " + totalUpahLembur.toFixed(2));
    console.log("Total Gaji: Rp " + totalGaji.toFixed(2));

    // popup hasil
    alert(
        "=== HASIL PERHITUNGAN ===\n\n" +
        "Nama: " + nama +
        "\nTotal Gaji: Rp " + totalGaji.toFixed(2)
    );

    // buat baris tabel
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${nama}</td>
        <td>Rp ${gajiPokok.toLocaleString("id-ID")}</td>
        <td>${jamLembur} Jam</td>
        <td>Rp ${upahLemburPerJam.toFixed(2)}</td>
        <td>Rp ${totalUpahLembur.toFixed(2)}</td>
        <td><strong>Rp ${totalGaji.toFixed(2)}</strong></td>
    `;

    // hapus tulisan "Belum ada data"
    if (table.children[0].children[0].colSpan === 6) {
        table.innerHTML = "";
    }

    // tambah ke tabel
    table.appendChild(row);

    // reset form
    form.reset();

});