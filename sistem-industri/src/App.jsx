import React from 'react';
import KartuMesin from './Komponen/KartuMesin';
import KartuKaryawan from './Komponen/KartuKaryawan';

function App() {
  return (
    <div className="container mt-4">
      {/* Judul Utama */}
      <h1 className="text-center mb-0">Monitoring Lini Produksi A</h1>
      
      {/* Nama Mahasiswa sebagai identitas */}
      <p className="text-center text-muted mb-4">
        <strong>Maessa Andrea Vallenia</strong> | <strong>23051430044</strong>
      </p>
  
      {/* BARIS KARTU MESIN */}
      <div className="row mb-4">
        <div className="col-md-4">
          <KartuMesin nama="CNC-Turning-01" status="Running" produksi={150} />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="CNC-Milling-02" status="Maintenance" />
        </div>
        <div className="col-md-4">
          <KartuMesin nama="Press-Hydraulic-05" status="Stop" produksi={85} />
        </div>
      </div>

      <hr className="my-5" />

      {/* BARIS DAFTAR KARYAWAN */}
      <h2 className="text-center mb-4">Daftar Karyawan</h2>
      <div className="row">
        <div className="col-md-4">
          <KartuKaryawan nama="Najwa Andrea" jabatan="Manager" bagian="Produksi" />
        </div>
        <div className="col-md-4">
          <KartuKaryawan nama="Diva Regina" jabatan="Operator" bagian="Assembly" />
        </div>
        <div className="col-md-4">
          <KartuKaryawan nama="Novita Dian" jabatan="QC" bagian="Quality Control" />
        </div>
      </div>
    </div>
  );
}

export default App;