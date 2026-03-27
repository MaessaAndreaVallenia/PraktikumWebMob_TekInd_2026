const dayaInput = document.getElementById("daya");
const jamInput = document.getElementById("jam");

const hasilKwh = document.getElementById("hasilKwh");
const hasilBiaya = document.getElementById("hasilBiaya");

const rekapText = document.getElementById("rekapText");
const kategori = document.getElementById("kategori");

function hitungListrik() {
    let daya = parseFloat(dayaInput.value) || 0;
    let jam = parseFloat(jamInput.value) || 0;

    let totalKwh = (daya * jam) / 1000;
    let biaya = totalKwh * 1500;

    // Output utama
    hasilKwh.textContent = totalKwh.toFixed(2) + " kWh";
    hasilBiaya.textContent = "Rp " + biaya.toLocaleString("id-ID");

    // Rekapan
    rekapText.textContent =
        "Penggunaan listrik sebesar " +
        totalKwh.toFixed(2) +
        " kWh dengan estimasi biaya Rp " +
        biaya.toLocaleString("id-ID") + ".";

    // Kategori
    if (totalKwh === 0) {
        kategori.textContent = "Kategori: -";
        kategori.className = "fw-semibold text-secondary";
    } else if (totalKwh < 5) {
        kategori.textContent = "Kategori: Rendah";
        kategori.className = "fw-semibold text-success";
    } else if (totalKwh < 15) {
        kategori.textContent = "Kategori: Sedang";
        kategori.className = "fw-semibold text-warning";
    } else {
        kategori.textContent = "Kategori: Tinggi";
        kategori.className = "fw-semibold text-danger";
    }
}

// Real-time (tanpa tombol submit)
dayaInput.addEventListener("input", hitungListrik);
jamInput.addEventListener("input", hitungListrik);