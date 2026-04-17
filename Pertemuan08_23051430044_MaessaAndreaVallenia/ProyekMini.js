// SELEKSI ELEMENT
const btnLoad = document.getElementById('btnLoad');
const btnReset = document.getElementById('btnReset');
const container = document.getElementById('containerInsiden');
const loading = document.getElementById('loading');
const searchInput = document.getElementById('searchInput');

// FILTER BARU
const filterId = document.getElementById('filterId');
const filterStatus = document.getElementById('filterStatus');

// DATA LAPORAN INDONESIA
const laporanIndonesia = [
    {
        title: "Kerusakan Conveyor Produksi",
        body: "Conveyor pada lini produksi 2 berhenti beroperasi akibat motor penggerak mengalami overheating."
    },
    {
        title: "Kebocoran Pipa Air Pendingin",
        body: "Ditemukan kebocoran pada pipa air pendingin di area mesin boiler sehingga perlu perbaikan segera."
    },
    {
        title: "Gangguan Sistem ERP",
        body: "Sistem ERP tidak dapat diakses selama 15 menit sehingga proses input data produksi tertunda."
    },
    {
        title: "Lampu Gudang Mati",
        body: "Beberapa lampu di area gudang bahan baku padam dan mengganggu aktivitas pengambilan material."
    },
    {
        title: "Keterlambatan Bahan Baku",
        body: "Pengiriman bahan baku dari supplier terlambat sehingga jadwal produksi perlu disesuaikan."
    },
    {
        title: "Mesin Packing Overheat",
        body: "Mesin packing mengalami peningkatan suhu di atas batas normal saat digunakan secara terus-menerus."
    },
    {
        title: "Kesalahan Input Data Produksi",
        body: "Operator melakukan kesalahan input jumlah output sehingga data produksi perlu diperbaiki."
    },
    {
        title: "Keterbatasan Stok Barang",
        body: "Stok komponen utama di gudang hampir habis dan berpotensi menghambat proses produksi."
    },
    {
        title: "Gangguan Jaringan Internet",
        body: "Koneksi internet di area kantor produksi terputus sehingga sistem monitoring tidak dapat digunakan."
    },
    {
        title: "Alarm Keselamatan Aktif",
        body: "Alarm keselamatan berbunyi akibat sensor mendeteksi suhu ruangan yang terlalu tinggi."
    }
];

// API
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// SIMPAN DATA GLOBAL
let dataGlobal = [];

// LOAD DATA
btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(data => {
            dataGlobal = data.slice(0, 10).map((item, index) => ({
                id: item.id,
                title: laporanIndonesia[index].title,
                body: laporanIndonesia[index].body,
                ditindakLanjut: false
            }));

            tampilkanData(dataGlobal);
        })
        .catch(error => {
            container.innerHTML = `
                <div class="alert alert-danger">
                    ${error.message}
                </div>
            `;
        })
        .finally(() => {
            loading.classList.add('d-none');
        });
});

// TAMPILKAN DATA
function tampilkanData(data) {
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `
            <div class="alert alert-warning">
                Data tidak ditemukan.
            </div>
        `;
        return;
    }

    data.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';

        const statusClass = item.ditindakLanjut
            ? 'border-success shadow-lg'
            : 'shadow-sm';

        col.innerHTML = `
            <div class="card h-100 ${statusClass} border">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title mb-0">
                            #${item.id} - ${item.title}
                        </h5>

                        <span class="badge ${item.ditindakLanjut ? 'bg-success' : 'bg-warning text-dark'}">
                            ${item.ditindakLanjut ? 'Selesai' : 'Pending'}
                        </span>
                    </div>

                    <p class="card-text text-muted small">
                        ${item.body}
                    </p>

                    <button 
                        class="btn ${item.ditindakLanjut ? 'btn-success w-100' : 'btn-outline-dark w-100'}"
                        ${item.ditindakLanjut ? 'disabled' : ''}
                        onclick="tindakLanjut(${item.id})">
                        ${item.ditindakLanjut ? 'Sudah Ditindak Lanjut' : 'Tindak Lanjut'}
                    </button>
                </div>
            </div>
        `;

        container.appendChild(col);
    });
}

// FILTER DATA
function filterData() {
    const keyword = searchInput.value.toLowerCase();
    const idKeyword = filterId.value;
    const statusKeyword = filterStatus.value;

    let hasil = dataGlobal.filter(item => {
        const cocokJudul = item.title.toLowerCase().includes(keyword);

        const cocokId = idKeyword === '' || item.id == idKeyword;

        let cocokStatus = true;

        if (statusKeyword === 'pending') {
            cocokStatus = item.ditindakLanjut === false;
        } else if (statusKeyword === 'selesai') {
            cocokStatus = item.ditindakLanjut === true;
        }

        return cocokJudul && cocokId && cocokStatus;
    });

    tampilkanData(hasil);
}

// EVENT FILTER
searchInput.addEventListener('input', filterData);
filterId.addEventListener('input', filterData);
filterStatus.addEventListener('change', filterData);

// RESET
btnReset.addEventListener('click', function () {
    if (confirm('Yakin mau reset semua data & status?')) {
        container.innerHTML = '';
        dataGlobal = [];
        searchInput.value = '';
        filterId.value = '';
        filterStatus.value = 'semua';
    }
});

// TINDAK LANJUT
function tindakLanjut(id) {
    const item = dataGlobal.find(item => item.id === id);

    if (item && !item.ditindakLanjut) {
        item.ditindakLanjut = true;

        filterData();

        alert(`Tiket ID ${id} sedang diproses oleh Tim Maintenance`);
    }
}