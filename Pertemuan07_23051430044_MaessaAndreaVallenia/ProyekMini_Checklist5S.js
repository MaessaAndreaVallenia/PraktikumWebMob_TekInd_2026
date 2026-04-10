// ============================================
// ProyekMini_Checklist5S.js - VERSI LENGKAP
// ============================================

// Inisialisasi data
let audits = JSON.parse(localStorage.getItem('audit5S')) || [];
let penggunaList = JSON.parse(localStorage.getItem('penggunaList')) || ['Admin', 'User1', 'User2', 'Supervisor'];
let operatorList = JSON.parse(localStorage.getItem('operatorList')) || [];

// Load data awal
window.onload = function() {
    loadPengguna();
    loadOperatorDropdown();
    tampilkanTabel();
    setupEventListeners();
    document.getElementById('tanggal').value = new Date().toISOString().split('T')[0];
};

function setupEventListeners() {
    // Form events
    document.getElementById('form5S').addEventListener('submit', simpanAudit);
    document.getElementById('hapusSemua').addEventListener('click', hapusSemuaData);
    document.getElementById('searchInput').addEventListener('keyup', filterTabel);
    document.getElementById('clearSearch').addEventListener('click', clearSearch);
    document.getElementById('simpanOperator').addEventListener('click', simpanOperator);
    
    // Real-time validation
    document.getElementById('pilihOperator').addEventListener('change', updateShiftDropdown);
    document.getElementById('tanggal').addEventListener('change', validasiForm);
    document.getElementById('shift').addEventListener('change', validasiForm);
    document.getElementById('pengguna').addEventListener('change', validasiForm);
    
    // Modal operator
    document.getElementById('modalOperator').addEventListener('shown.bs.modal', resetModalOperator);
}

function loadPengguna() {
    const select = document.getElementById('pengguna');
    select.innerHTML = '<option value="">Pilih Pengguna</option>';
    
    penggunaList.forEach(pengguna => {
        const option = document.createElement('option');
        option.value = pengguna;
        option.textContent = pengguna;
        select.appendChild(option);
    });
    
    localStorage.setItem('penggunaList', JSON.stringify(penggunaList));
}

function loadOperatorDropdown() {
    const select = document.getElementById('pilihOperator');
    select.innerHTML = '<option value="">📋 Pilih Operator</option>';
    
    operatorList.forEach((op, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${op.nama} (${op.shifts.length} shift tersedia)`;
        select.appendChild(option);
    });
}

function updateShiftDropdown() {
    const operatorIndex = document.getElementById('pilihOperator').value;
    const shiftSelect = document.getElementById('shift');
    
    shiftSelect.innerHTML = '<option value="">⏰ Pilih Shift</option>';
    shiftSelect.disabled = true;
    
    if(operatorIndex === '' || !operatorList[operatorIndex]) {
        validasiForm();
        return;
    }
    
    const operator = operatorList[operatorIndex];
    operator.shifts.forEach(shift => {
        const option = document.createElement('option');
        option.value = shift;
        option.textContent = shift;
        shiftSelect.appendChild(option);
    });
    
    shiftSelect.disabled = false;
    validasiForm();
}

function simpanOperator() {
    const nama = document.getElementById('namaOperator').value.trim();
    if(!nama) {
        alert('❌ Nama operator wajib diisi!');
        document.getElementById('namaOperator').focus();
        return;
    }
    
    // Cek duplikasi nama
    if(operatorList.some(op => op.nama.toLowerCase() === nama.toLowerCase())) {
        alert('❌ Operator dengan nama tersebut sudah ada!');
        return;
    }
    
    const operator = {
        nama: nama,
        shifts: []
    };
    
    if(document.getElementById('shiftPagi').checked) operator.shifts.push('Pagi (06:00-14:00)');
    if(document.getElementById('shiftSiang').checked) operator.shifts.push('Siang (14:00-22:00)');
    if(document.getElementById('shiftMalam').checked) operator.shifts.push('Malam (22:00-06:00)');
    
    if(operator.shifts.length === 0) {
        alert('❌ Pilih minimal 1 shift!');
        return;
    }
    
    operatorList.push(operator);
    localStorage.setItem('operatorList', JSON.stringify(operatorList));
    
    loadOperatorDropdown();
    bootstrap.Modal.getInstance(document.getElementById('modalOperator')).hide();
    
    alert('✅ Operator "' + nama + '" berhasil ditambahkan!');
}

function resetModalOperator() {
    document.getElementById('modalTitle').innerHTML = '<i class="fas fa-user-plus me-2"></i>Tambah Operator';
    document.getElementById('namaOperator').value = '';
    document.getElementById('shiftPagi').checked = true;
    document.getElementById('shiftSiang').checked = true;
    document.getElementById('shiftMalam').checked = true;
    document.getElementById('namaOperator').focus();
}

function validasiForm() {
    const operatorIndex = document.getElementById('pilihOperator').value;
    const tanggal = document.getElementById('tanggal').value;
    const shift = document.getElementById('shift').value;
    const pengguna = document.getElementById('pengguna').value;
    const errorEl = document.getElementById('errorShift');
    const submitBtn = document.querySelector('button[type="submit"]');
    
    // Enable/disable submit button
    const formValid = pengguna && operatorIndex && tanggal && shift;
    submitBtn.disabled = !formValid;
    
    // Cek duplikasi shift
    if(formValid && operatorList[operatorIndex]) {
        const operator = operatorList[operatorIndex];
        const sudahAda = audits.some(audit => 
            audit.operatorNama === operator.nama && 
            audit.tanggal === tanggal && 
            audit.shift === shift
        );
        
        if(sudahAda) {
            errorEl.textContent = 'Shift sudah ada untuk operator ini!';
            errorEl.style.display = 'inline-block';
            submitBtn.disabled = true;
            return false;
        }
    }
    
    errorEl.style.display = 'none';
    return formValid;
}

function simpanAudit(e) {
    e.preventDefault();
    if(!validasiForm()) return;
    
    const operatorIndex = document.getElementById('pilihOperator').value;
    const operator = operatorList[operatorIndex];
    
    const checkboxes = ['seiri', 'seiton', 'seiso', 'seiketsu', 'shitsuke'];
    const checkedCount = checkboxes.filter(id => document.getElementById(id).checked).length;
    const skor = Math.round((checkedCount / 5) * 100);
    
    const audit = {
        id: Date.now(),
        pengguna: document.getElementById('pengguna').value,
        operatorNama: operator.nama,
        tanggal: document.getElementById('tanggal').value,
        shift: document.getElementById('shift').value,
        skor: skor,
        checklist: checkboxes.reduce((acc, id) => {
            acc[id] = document.getElementById(id).checked;
            return acc;
        }, {})
    };
    
    audits.unshift(audit);
    localStorage.setItem('audit5S', JSON.stringify(audits));
    
    // Reset form
    document.getElementById('form5S').reset();
    document.getElementById('tanggal').value = new Date().toISOString().split('T')[0];
    document.getElementById('shift').disabled = true;
    document.getElementById('errorShift').style.display = 'none';
    
    tampilkanTabel();
    alert('✅ Data audit berhasil disimpan!\nSkor: ' + skor + '%');
}

function tampilkanTabel(filteredAudits = audits) {
    const tbody = document.getElementById('tabelAudit');
    tbody.innerHTML = '';
    
    if(filteredAudits.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center text-muted py-4">Belum ada data audit</td></tr>';
        return;
    }
    
    filteredAudits.forEach(audit => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${formatTanggal(audit.tanggal)}</td>
            <td><strong>${audit.operatorNama}</strong></td>
            <td><span class="badge bg-info">${audit.shift}</span></td>
            <td>${audit.pengguna}</td>
            <td><span class="badge ${getSkorBadge(audit.skor)}">${audit.skor}%</span></td>
            <td>
                <div class="btn-group btn-group-sm" role="group">
                    <button class="btn btn-warning" onclick="editAudit(${audit.id})" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger" onclick="hapusAudit(${audit.id})" title="Hapus">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
    });
}

function filterTabel() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = audits.filter(audit => 
        audit.operatorNama.toLowerCase().includes(query) ||
        audit.shift.toLowerCase().includes(query) ||
        audit.pengguna.toLowerCase().includes(query) ||
        formatTanggal(audit.tanggal).toLowerCase().includes(query)
    );
    tampilkanTabel(filtered);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    tampilkanTabel();
}

function formatTanggal(tanggal) {
    return new Date(tanggal + 'T00:00:00').toLocaleDateString('id-ID');
}

function getSkorBadge(skor) {
    if(skor >= 90) return 'bg-success';
    if(skor >= 70) return 'bg-warning';
    return 'bg-danger';
}

function hapusSemuaData() {
    if(confirm('⚠️ Yakin ingin hapus SEMUA data?\nIni tidak bisa dibatalkan!')) {
        localStorage.clear();
        audits = [];
        penggunaList = ['Admin', 'User1', 'User2', 'Supervisor'];
        operatorList = [];
        loadPengguna();
        loadOperatorDropdown();
        tampilkanTabel();
        alert('🗑️ Semua data telah dihapus!');
    }
}

function hapusAudit(id) {
    if(confirm('Yakin hapus data ini?')) {
        audits = audits.filter(audit => audit.id !== id);
        localStorage.setItem('audit5S', JSON.stringify(audits));
        tampilkanTabel();
        alert('✅ Data berhasil dihapus!');
    }
}

function editAudit(id) {
    const audit = audits.find(a => a.id === id);
    if(audit) {
        // Load data ke form
        document.getElementById('pengguna').value = audit.pengguna;
        document.getElementById('tanggal').value = audit.tanggal;
        
        // Cari operator index
        const operatorIndex = operatorList.findIndex(op => op.nama === audit.operatorNama);
        if(operatorIndex !== -1) {
            document.getElementById('pilihOperator').value = operatorIndex;
            updateShiftDropdown();
            document.getElementById('shift').value = audit.shift;
        }
        
        // Load checklist
        ['seiri', 'seiton', 'seiso', 'seiketsu', 'shitsuke'].forEach(id => {
            document.getElementById(id).checked = audit.checklist[id];
        });
        
        alert('📝 Data dimuat untuk di-edit. Ubah yang diperlukan lalu simpan!');
    }
}

// Inisialisasi beberapa operator contoh jika kosong
if(operatorList.length === 0) {
    operatorList = [
        {
            nama: 'Budi Santoso',
            shifts: ['Pagi (06:00-14:00)', 'Siang (14:00-22:00)']
        },
        {
            nama: 'Sari Dewi',
            shifts: ['Siang (14:00-22:00)', 'Malam (22:00-06:00)']
        }
    ];
    localStorage.setItem('operatorList', JSON.stringify(operatorList));
    loadOperatorDropdown();
}