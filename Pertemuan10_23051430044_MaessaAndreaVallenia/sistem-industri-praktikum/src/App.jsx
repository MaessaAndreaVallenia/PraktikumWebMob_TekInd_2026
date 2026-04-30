import React from 'react';
import CounterProduksi from './Komponen/CounterProduksi';
import JamDigital from './Komponen/JamDigital';
import KartuMesin from './Komponen/KartuMesin';

function App() {
  return (
    <div className="container mt-5">
      {/* Bagian Atas: Jam Digital */}
      <div className="text-center mb-5">
        <JamDigital />
      </div>

      <div className="row g-4">
        {/* Sisi Kiri: Counter Produksi (Lebar 4) */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-4 h-100 border-0 bg-light">
            <CounterProduksi />
          </div>
        </div>

        {/* Sisi Kanan: Panel Kontrol Mesin (Lebar 8) */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-4 h-100 border-0">
            <h3 className="mb-4 text-center fw-bold">Panel Kontrol Mesin</h3>
            
            {/* Kartu-kartu berjejer menyamping dengan row-cols-md-3 */}
            <div className="row row-cols-1 row-cols-md-3 g-3">
              <div className="col">
                <KartuMesin nama="CNC-Turning-01" status="Running" produksi={70} />
              </div>
              <div className="col">
                <KartuMesin nama="CNC-Milling-02" status="Maintenance" produksi={50} />
              </div>
              <div className="col">
                <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;