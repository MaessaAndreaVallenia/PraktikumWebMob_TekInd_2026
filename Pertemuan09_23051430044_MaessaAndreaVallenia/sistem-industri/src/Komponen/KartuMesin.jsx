import React from 'react';

// Latihan 1: Mengambil data langsung di dalam kurung kurawal { }
// Ini namanya Destructuring, tidak pakai (props) lagi.
// Latihan 2: Memberikan nilai default 0 pada produksi
function KartuMesin({ nama, status, produksi = 0 }) {
    
    // Logika warna tetap sama
    let badgeColor = 'bg-secondary';
    if (status === 'Running') badgeColor = 'bg-success';
    if (status === 'Stop') badgeColor = 'bg-danger';
    if (status === 'Maintenance') badgeColor = 'bg-warning';

    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                {/* Pakai variabelnya langsung tanpa props.nama */}
                <h5 className="card-title">{nama}</h5>
                <span className={`badge ${badgeColor}`}>{status}</span>
                <hr />
                <p>Produksi Saat Ini: <strong>{produksi}</strong> Unit</p>
            </div>
        </div>
    );
}

export default KartuMesin;