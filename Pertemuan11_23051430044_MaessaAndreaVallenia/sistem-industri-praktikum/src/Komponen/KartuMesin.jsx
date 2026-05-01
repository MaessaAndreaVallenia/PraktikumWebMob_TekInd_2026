import React, { useState } from 'react';

function KartuMesin({ nama, status, produksi }) {
  // State Lokal untuk ganti status (Langkah 3)
  const [statusLokal, setStatusLokal] = useState(status);

  return (
    <div className="card h-100 shadow-sm border-0 bg-white">
      <div className="card-body p-3 text-center">
        {/* Nama Mesin */}
        <h6 className="fw-bold text-primary mb-2">{nama}</h6>
        
        {/* Badge Status Dinamis */}
        <div className="mb-2">
          <span className={`badge ${
            statusLokal === 'Running' ? 'bg-success' : 
            statusLokal === 'Stop' ? 'bg-danger' : 'bg-warning text-dark'
          }`}>
            {statusLokal}
          </span>
        </div>
        
        {/* Info Produksi */}
        <p className="small text-muted mb-3">
          Prod: <strong>{produksi} Unit</strong>
        </p>

        {/* Dropdown untuk ganti status */}
        <div className="mt-2">
          <select
            className="form-select form-select-sm"
            style={{ fontSize: '0.75rem' }}
            value={statusLokal}
            onChange={(e) => setStatusLokal(e.target.value)}
          >
            <option value="Running">Running</option>
            <option value="Stop">Stop</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default KartuMesin;