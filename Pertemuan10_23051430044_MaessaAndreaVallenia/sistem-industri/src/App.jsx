import React from 'react';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KartuMesin from './Komponen/KartuMesin';
// 1. PASTIKAN IMPORT INI ADA
import KalkulatorOEE from './Komponen/KalkulatorOEE'; 

function App() {
  return (
    <div className="container py-5">
      {/* Bagian Jam */}
      <div className="text-center mb-5">
        <h1 className="fw-bold mb-3 text-uppercase">Dashboard Monitoring Produksi</h1>
        <JamDigital />
      </div>

      <div className="row g-4">
        {/* Kolom Kiri: Counter & Emergency */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-4 h-100 border-0 bg-light">
            <CounterProduksi />
          </div>
        </div>

        {/* Kolom Kanan: Panel Mesin */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4 h-100 border-0">
            <h3 className="mb-4 text-center">Panel Kontrol Mesin</h3>
            <div className="row row-cols-1 row-cols-md-3 g-3">
              <div className="col">
                <KartuMesin nama="CNC-Turning-01" status="Running" produksi={100} />
              </div>
              <div className="col">
                <KartuMesin nama="CNC-Milling-02" status="Maintenance" produksi={150} />
              </div>
              <div className="col">
                <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={200} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. TARUH KALKULATOR OEE DI SINI (Di luar Row supaya lebar) */}
      <div className="row mt-5">
        <div className="col-12">
          <KalkulatorOEE />
        </div>
      </div>
    </div>
  );
}

export default App;