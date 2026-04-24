import React from 'react';

function KartuKaryawan({ nama, jabatan, bagian }) {
    return (
        <div className="card shadow-sm p-3 mb-3">
            <div className="card-body">
                <h6 className="text-muted mb-1">Karyawan</h6>
                {/* Hanya nama yang diberi warna biru muda (text-info) */}
                <h5 className="card-title text-info">{nama}</h5>
                <hr />
                <p className="mb-1">Jabatan: <strong>{jabatan}</strong></p>
                <p className="mb-0">Bagian: <strong>{bagian}</strong></p>
            </div>
        </div>
    );
}

export default KartuKaryawan;