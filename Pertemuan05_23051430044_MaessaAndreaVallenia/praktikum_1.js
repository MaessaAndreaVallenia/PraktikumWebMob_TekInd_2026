// FUNCTION Declaration 
// Fungsi untuk menghitung konsumsi daya (P = V x I)

function hitungDaya(tegangan, arus) {
    let daya = tegangan * arus;
    return daya;

}

// Pemanggilan Function 

let teganganMesin = 220;
let arusMesin = 10;

let totalDaya = hitungDaya(teganganMesin, arusMesin);
console.log("Daya Mesin: " + totalDaya + " Watt");

// TAMBAHAN SUPAYA MUNCUL DI WEB

const btn = document.getElementById("btnHitung");

const inputV = document.getElementById("tegangan");
const inputI = document.getElementById("arus");

const output = document.getElementById("hasilOutput");
const tabel = document.getElementById("rekapTable");


btn.addEventListener("click", function () {

    let V = Number(inputV.value);
    let I = Number(inputI.value);

    let hasil = hitungDaya(V, I);

    console.log("=== HITUNG DAYA ===");
    console.log("Tegangan:", V);
    console.log("Arus:", I);
    console.log("Daya:", hasil);


    // hapus tulisan awal tabel
    if (tabel.children[0].children[0].colSpan) {
        tabel.innerHTML = "";
    }


    // tampil di web

    output.innerHTML =
        "P = V × I = " +
        V + " × " + I +
        " = " + hasil + " Watt";


    // tambah ke tabel

    let row = document.createElement("tr");

    row.innerHTML =
        "<td>P = V × I</td>" +
        "<td>" + hasil + " Watt</td>";

    tabel.appendChild(row);

});