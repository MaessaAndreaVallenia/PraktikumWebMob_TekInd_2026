// 1. Seleksi Elemen DOM
const btnStart = document.getElementById('btnStart');
const btnStop = document.getElementById('btnStop');
const btnReset = document.getElementById('btnReset');
const statusIndicator = document.getElementById('statusIndicator');
// Seleksi elemen dom untuk suhuMesin(latihan 2)
const suhuMesin = document.getElementById('suhuMesin');
const teksStatus = statusIndicator.querySelector('strong'); // Mengambil elemen <strong> di dalam alert
// Membuat seleksi elemen DOM untuk btnMaintenance dan card(latihan 1)
const btnMaintenance = document.getElementById('btnMaintenance');
const card = document.querySelector('.card');

// Variabel State
let suhu = 25;
let intervalId = null; // Untuk menyimpan ID timer
// Event Listener Tombol START
btnStart.addEventListener('click', function () {// Ubah UI Status
    statusIndicator.className = 'alert alert-success'; // Ganti class Bootstrap (Hijau)
    teksStatus.innerText = 'RUNNING';

    // Logika simulasi kenaikan suhu
    intervalId = setInterval(function () {
        suhu += 1;
        suhuMesin.innerText = suhu + " °C";

        // Peringatan jika suhu overheat
        if (suhu > 80) {
            statusIndicator.className = 'alert alert-danger';
            teksStatus.innerText = 'OVERHEAT WARNING';
            suhuMesin.style.color = 'red';
        }
    }, 1000); // Jalankan setiap 1 detik

    // Matikan tombol Start agar tidak double click
    btnStart.disabled = true;
    btnStop.disabled = false;
});
// Event Listener Tombol STOP
btnStop.addEventListener('click', function () {
    clearInterval(intervalId); // Hentikan timer kenaikan suhu
    statusIndicator.className = 'alert alert-danger'; // Mengubah warna menjadi merah (latihan 1)
    teksStatus.innerText = 'STOPPED';

    // Reset tombol
    btnStart.disabled = false;
    btnStop.disabled = true;
});
// Event Listener Tombol RESET
btnReset.addEventListener('click', function () {
    clearInterval(intervalId);
    suhu = 25;
    suhuMesin.innerText = suhu + " °C";
    suhuMesin.style.color = 'black';
    statusIndicator.className = 'alert alert-warning'; // Mengubah warna menjadi orange(latihan 1)
    teksStatus.innerText = 'UNKNOWN';

    btnStart.disabled = false;
    btnStop.disabled = true;
});

// Event saat tombol Maintenance ditekan (latihan 1)
btnMaintenance.addEventListener('click', () => {
    // Hentikan simulasi jika masih berjalan
    clearInterval(intervalId);

    // Ubah tampilan card menjadi abu-abu dan teks menjadi maintenance (latihan 1)
    card.classList.add('bg-light');

    // Update status menjadi maintenance (latihan 1)
    statusIndicator.className = 'alert alert-secondary';
    teksStatus.textContent = 'MAINTENANCE';

    // Nonaktifkan tombol Start dan Stop karena dalam mode maintenance (latihan 1)
    btnStart.disabled = true;
    btnStop.disabled = true;
});


// Event saat mouse masuk ke teks suhu (latihan 2)
suhuMesin.addEventListener('mouseover', () => {
    suhuMesin.style.fontWeight = 'bold';
    suhuMesin.style.color = 'blue';
});


// Event saat mouse keluar dari teks suhu (latihan 2)
suhuMesin.addEventListener('mouseout', () => {
    suhuMesin.style.fontWeight = 'normal';
    suhuMesin.style.color = 'black';
});


const inputRPM = document.getElementById('inputRPM');
const pesanError = document.getElementById('pesanError');
inputRPM.addEventListener('input', function () {
    let val = parseInt(this.value);

    if (val > 2000) {
        pesanError.classList.remove('d-none'); // Tampilkan pesan error
        this.classList.add('is-invalid'); // Berikan border merah Bootstrap
    } else {
        pesanError.classList.add('d-none'); // Sembunyikan pesan
        this.classList.remove('is-invalid');
    }
});