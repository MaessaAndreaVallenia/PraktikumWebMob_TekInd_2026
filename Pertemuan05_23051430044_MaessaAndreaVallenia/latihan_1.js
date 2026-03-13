// ===============================
// LATIHAN 1 - FUNCTION PERHITUNGAN
// ===============================

// Fungsi untuk menghitung Lingkaran
function hitungLingkaran(r) {
    // Rumus luas dan keliling lingkaran
    let luas = Math.PI * r * r;
    let keliling = 2 * Math.PI * r;
    return {luas: luas.toFixed(2), keliling: keliling.toFixed(2)};
}

// Fungsi untuk menghitung Kubus
function hitungKubus(s) {
    // Rumus volume dan luas permukaan kubus
    let volume = s ** 3;
    let luasPermukaan = 6 * s * s;
    return {volume, luasPermukaan};
}

// Fungsi untuk menghitung Balok
function hitungBalok(p, l, t) {
    // Rumus volume dan luas permukaan balok
    let volume = p * l * t;
    let luasPermukaan = 2 * (p*l + p*t + l*t);
    return {volume, luasPermukaan};
}

// Ambil elemen DOM
const jenisHitung = document.getElementById("jenisHitung"); // dropdown jenis perhitungan
const inputFields = document.getElementById("inputFields"); // div untuk input dinamis
const btnHitung = document.getElementById("btnHitung"); // tombol hitung
const hasilOutput = document.getElementById("hasilOutput"); // div untuk menampilkan hasil
const rekapTable = document.getElementById("rekapTable"); // tabel rekap

// ===============================
// FUNCTION UNTUK MENAMPILKAN INPUT SESUAI PILIHAN
// ===============================
function tampilkanInput() {
    const jenis = jenisHitung.value;
    let html = "";

    // Jika lingkaran
    if(jenis === "lingkaran"){
        html = `<label>Jari-jari (r) [cm]</label>
                <input type="number" id="jariJari" class="form-control mb-2" value="7">`;
    } 
    // Jika kubus
    else if(jenis === "kubus"){
        html = `<label>Sisi (s) [cm]</label>
                <input type="number" id="sisiKubus" class="form-control mb-2" value="5">`;
    } 
    // Jika balok
    else if(jenis === "balok"){
        html = `<label>Panjang (p) [cm]</label>
                <input type="number" id="panjangBalok" class="form-control mb-2" value="10">
                <label>Lebar (l) [cm]</label>
                <input type="number" id="lebarBalok" class="form-control mb-2" value="4">
                <label>Tinggi (t) [cm]</label>
                <input type="number" id="tinggiBalok" class="form-control mb-2" value="3">`;
    }

    // Tampilkan input di div
    inputFields.innerHTML = html;
}

// Tampilkan input saat pertama kali load
tampilkanInput();

// Event listener jika dropdown diubah
jenisHitung.addEventListener("change", tampilkanInput);

// ===============================
// EVENT LISTENER UNTUK TOMBOL HITUNG
// ===============================
btnHitung.addEventListener("click", function(){
    const jenis = jenisHitung.value;
    let htmlOutput = "", rekapHtml = "";

    // Perhitungan Lingkaran
    if(jenis === "lingkaran"){
        const r = Number(document.getElementById("jariJari").value);
        const ling = hitungLingkaran(r);
        htmlOutput = `Luas = ${ling.luas} cm², Keliling = ${ling.keliling} cm`;
        rekapHtml = `<tr><td>Luas Lingkaran (πr²)</td><td>${ling.luas} cm²</td></tr>
                     <tr><td>Keliling Lingkaran (2πr)</td><td>${ling.keliling} cm</td></tr>`;
        console.log("Lingkaran | r:", r, "Luas:", ling.luas, "Keliling:", ling.keliling);
    } 

    // Perhitungan Kubus
    else if(jenis === "kubus"){
        const s = Number(document.getElementById("sisiKubus").value);
        const kub = hitungKubus(s);
        htmlOutput = `Volume = ${kub.volume} cm³, Luas Permukaan = ${kub.luasPermukaan} cm²`;
        rekapHtml = `<tr><td>Volume Kubus (s³)</td><td>${kub.volume} cm³</td></tr>
                     <tr><td>Luas Permukaan Kubus (6s²)</td><td>${kub.luasPermukaan} cm²</td></tr>`;
        console.log("Kubus | s:", s, "Volume:", kub.volume, "Luas Permukaan:", kub.luasPermukaan);
    } 

    // Perhitungan Balok
    else if(jenis === "balok"){
        const p = Number(document.getElementById("panjangBalok").value);
        const l = Number(document.getElementById("lebarBalok").value);
        const t = Number(document.getElementById("tinggiBalok").value);
        const bal = hitungBalok(p,l,t);
        htmlOutput = `Volume = ${bal.volume} cm³, Luas Permukaan = ${bal.luasPermukaan} cm²`;
        rekapHtml = `<tr><td>Volume Balok (p×l×t)</td><td>${bal.volume} cm³</td></tr>
                     <tr><td>Luas Permukaan Balok (2(pl+pt+lt))</td><td>${bal.luasPermukaan} cm²</td></tr>`;
        console.log("Balok | p:",p,"l:",l,"t:",t,"Volume:",bal.volume,"Luas Permukaan:",bal.luasPermukaan);
    }

    // Tampilkan hasil ke web
    hasilOutput.innerHTML = htmlOutput;

    // Update tabel rekap
    rekapTable.innerHTML = rekapHtml;
});