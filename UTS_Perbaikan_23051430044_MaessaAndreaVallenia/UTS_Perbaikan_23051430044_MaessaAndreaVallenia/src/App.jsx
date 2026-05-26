import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Komponen/Navbar';
import Dashboard from './Halaman/Dashboard';
import InputLaporan from './Halaman/InputLaporan';
import RiwayatData from './Halaman/RiwayatData';

function App() {
  const [dataLaporan, setDataLaporan] = useState(() => {
    const dataLokal = localStorage.getItem("DATA_LAPORAN_PRODUKSI");
    return dataLokal ? JSON.parse(dataLokal) : [
      { id: 1, tanggal: "2026-05-23", shift: "Shift 1 - Pagi", namaMesin: "CNC-01", produksi: 1000, reject: 20 }
    ];
  });

  useEffect(() => {
    const dataLokal = localStorage.getItem("DATA_LAPORAN_PRODUKSI");
    if (dataLokal) {
      setDataLaporan(JSON.parse(dataLokal));
    }
  }, []);

  const handleTambahData = (dataBaru) => {
    const updateData = [dataBaru, ...dataLaporan];
    setDataLaporan(updateData);
    localStorage.setItem("DATA_LAPORAN_PRODUKSI", JSON.stringify(updateData));
  };

  const handleDelete = (id) => {
    const setuju = window.confirm("Apakah Anda yakin ingin menghapus data log produksi ini?");
    if (setuju) {
      const updateData = dataLaporan.filter(item => item.id !== id);
      setDataLaporan(updateData);
      localStorage.setItem("DATA_LAPORAN_PRODUKSI", JSON.stringify(updateData));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard data={dataLaporan} />} />
          <Route path="/input" element={<InputLaporan onTambah={handleTambahData} />} />
          <Route path="/riwayat" element={<RiwayatData data={dataLaporan} onDelete={handleDelete} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;