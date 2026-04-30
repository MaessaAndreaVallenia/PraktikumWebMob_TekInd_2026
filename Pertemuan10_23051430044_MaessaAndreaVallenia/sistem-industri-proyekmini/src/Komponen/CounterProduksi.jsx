import React, { useState } from 'react';

function CounterProduksi() {
  const [hitung, setHitung] = useState(0);
  const [isEmergency, setIsEmergency] = useState(false);

  return (
    <div className="text-center">
      <h4 className="text-muted mb-3">Simulasi Hitung Produk</h4>

      {/* Conditional Rendering Alert */}
      {isEmergency && (
        <div className="alert alert-danger fw-bold border-0 shadow-sm mb-4">
          STATE: EMERGENCY STOP ACTIVATED!
        </div>
      )}

      <h1 className={`display-1 fw-bold my-4 ${isEmergency ? 'text-danger' : 'text-dark'}`}>
        {hitung}
      </h1>

      <p className="text-secondary mb-4">Target: 100 Unit</p>

      <div className="d-grid gap-3">
        <button
          className="btn btn-primary btn-lg fw-bold py-3 shadow-sm"
          onClick={() => setHitung(hitung + 1)}
          disabled={isEmergency}
        >
          {isEmergency ? 'DISABLED' : '+1 Unit (Sensor OK)'}
        </button>

        {/* Tombol Emergency / Reset Normal */}
        {!isEmergency ? (
          <button
            className="btn btn-dark fw-bold py-2"
            onClick={() => setIsEmergency(true)}
          >
            EMERGENCY STOP
          </button>
        ) : (
          <button
            className="btn btn-success fw-bold py-2 shadow-sm"
            onClick={() => setIsEmergency(false)}
          >
            RESET EMERGENCY 
          </button>
        )}

        <button
          className="btn btn-outline-secondary py-2"
          onClick={() => {
            setHitung(0);
            setIsEmergency(false);
          }}
        >
          Reset Shift
        </button>
      </div>
    </div>
  );
}

export default CounterProduksi;