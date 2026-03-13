// Array berisi beberapa object
let gudangMaterial = [
 { kode: "MAT-01", nama: "Baja Ringan", stok: 50, satuan: "Batang" },
 { kode: "MAT-02", nama: "Plastik ABS", stok: 120, satuan: "Kg" },
 { kode: "MAT-03", nama: "Oli Mesin", stok: 10, satuan: "Liter" }
];
console.log("--- Cek Stok Gudang ---");
// Menggunakan forEach untuk iterasi array object
gudangMaterial.forEach(function(item) {
 console.log(item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan);
 
 // Logika Re-order
 if (item.stok < 20) {
 console.log(" >>> PERINGATAN: Stok " + item.nama + " menipis! Segera PO.");
 }
});

// Tambahan untuk web
const btn = document.getElementById("btnTampil");
const output = document.getElementById("hasilOutput");

btn.addEventListener("click", function () {

    let html = "<h5>Rekap Stok Gudang:</h5>";
    html += "<ul class='list-group'>";

    // Iterasi sama seperti di console
    gudangMaterial.forEach(function(item) {
        html += "<li class='list-group-item d-flex justify-content-between align-items-center'>";
        html += item.kode + " - " + item.nama + " : " + item.stok + " " + item.satuan;

        // Peringatan stok menipis
        if (item.stok < 20) {
            html += " <span class='badge bg-danger'>Stok menipis!</span>";
        }

        html += "</li>";
    });

    html += "</ul>";
    output.innerHTML = html;
});