// Seleksi elemen
const form = document.getElementById('form5S');
const tabel = document.getElementById('tabelAudit');
const btnHapusSemua = document.getElementById('hapusSemua');

const STORAGE_KEY = 'DATA_AUDIT_5S';

// Load data saat halaman dibuka
document.addEventListener('DOMContentLoaded', loadData);

// Submit form
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const auditor = document.getElementById('auditor').value;

    // Ambil checklist
    const checklist = [
        document.getElementById('seiri').checked,
        document.getElementById('seiton').checked,
        document.getElementById('seiso').checked,
        document.getElementById('seiketsu').checked,
        document.getElementById('shitsuke').checked
    ];

    // Hitung skor
    const jumlahCeklis = checklist.filter(item => item).length;
    const skor = (jumlahCeklis / 5) * 100;

    // Data object
    const data = {
        id: Date.now(),
        tanggal: new Date().toLocaleDateString('id-ID'),
        auditor: auditor,
        skor: skor
    };

    saveData(data);

    form.reset();
    loadData();
});

// Simpan ke localStorage
function saveData(data) {
    let dataLama = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    dataLama.push(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataLama));
}

// Load & tampilkan data
function loadData() {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    tabel.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.tanggal}</td>
            <td>${item.auditor}</td>
            <td>${item.skor}%</td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="hapusData(${item.id})">
                    Hapus
                </button>
            </td>
        `;

        tabel.appendChild(row);
    });
}

// Hapus per data
window.hapusData = function(id) {
    if(confirm("Yakin hapus data?")) {
        let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        let dataBaru = data.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataBaru));
        loadData();
    }
}

// Hapus semua
btnHapusSemua.addEventListener('click', function() {
    if(confirm("Semua data akan dihapus!")) {
        localStorage.removeItem(STORAGE_KEY);
        loadData();
    }
});