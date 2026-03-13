// 3. OBJECT
let mesinA = {
 id: "M-01",
 nama: "Injection Molding 50 Ton",
 merk: "Toshiba",
 tahunBeli: 2018,
 status: "Running",
 spesifikasi: {
 kecepatanMax: 200, // mm/s
 tekananMax: 150 // bar
 }
};
// Mengakses data object
console.log("Nama Mesin: " + mesinA.nama);
console.log("Status: " + mesinA.status);
console.log("Tekanan Max: " + mesinA.spesifikasi.tekananMax + " bar");
// Mengubah data object (Simulasi mesin rusak)
mesinA.status = "Breakdown";
console.log("Status Baru: " + mesinA.status);

// TAMBAHAN UNTUK WEB

const btn = document.getElementById("btnTampil");
const output = document.getElementById("hasilOutput");


btn.addEventListener("click", function () {

    output.innerHTML =

        "Nama Mesin : " + mesinA.nama + "<br>" +
        "Merk : " + mesinA.merk + "<br>" +
        "Status : " + mesinA.status + "<br>" +
        "Tekanan Max : "
        + mesinA.spesifikasi.tekananMax
        + " bar";

});