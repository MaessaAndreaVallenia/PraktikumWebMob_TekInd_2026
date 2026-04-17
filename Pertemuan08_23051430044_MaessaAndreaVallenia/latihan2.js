// 1. Seleksi Elemen
const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');
const btnTambah = document.getElementById('btnTambah');
const inputFilter = document.getElementById('inputFilter');

// API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

let dataGlobal = [];

// 2. LOAD DATA
btnLoad.addEventListener('click', function () {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function (dataKaryawan) {
            console.log("Total data:", dataKaryawan.length); // 10
            dataGlobal = dataKaryawan;
            
            // TAMPILKAN SEMUA DATA (tanpa filter awal)
            tampilkanData(dataGlobal);
        })
        .catch(function (error) {
            container.innerHTML = `
                <div class="alert alert-danger">
                    Error: ${error.message}
                </div>
            `;
        })
        .finally(function () {
            loading.classList.add('d-none');
        });
});

// 3. TAMBAH DATA
btnTambah.addEventListener('click', function () {
    const dataBaru = {
        name: "Budi Santoso",
        email: "budi@email.com",
        company: { name: "PT Maju Mundur" },
        address: { city: "Yogyakarta" }
    };

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataBaru)
    })
    .then(response => {
        if (!response.ok) throw new Error('Gagal menambahkan');
        return response.json();
    })
    .then(result => {
        console.log("Berhasil:", result);
        alert("Data berhasil dikirim!");
    })
    .catch(error => {
        console.error(error);
        alert("Error!");
    });
});

// 4. TAMPIL DATA 
function tampilkanData(data) {
    container.innerHTML = '';
    
    data.forEach(function (karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">Email: ${karyawan.email}</p>
                    <p class="card-text">Perusahaan: ${karyawan.company.name}</p>
                    <p class="card-text"><small>Kota: ${karyawan.address.city}</small></p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// 5. FILTER DATA (LATIHAN 2)
inputFilter.addEventListener('input', function () {
    const keyword = this.value.toLowerCase();

    let hasil;

    if (keyword === "") {
        // INPUT KOSONG = KEMBALIKAN SEMUA DATA (10 karyawan)
        hasil = dataGlobal;
        console.log("Input kosong → tampilkan semua data");
    } else {
        // Filter berdasarkan keyword (kota)
        hasil = dataGlobal.filter(function (karyawan) {
            const kota = karyawan.address.city.toLowerCase();
            return kota.includes(keyword);
        });
        console.log(`Mencari "${keyword}" → ${hasil.length} hasil`);
    }

    tampilkanData(hasil);
});