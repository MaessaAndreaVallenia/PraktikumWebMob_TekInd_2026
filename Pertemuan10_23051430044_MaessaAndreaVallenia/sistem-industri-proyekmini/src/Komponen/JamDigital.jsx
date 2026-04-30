import React, { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());
  // 1. Tambahkan state untuk menyimpan nama kota
  const [kota, setKota] = useState('Jakarta');

  // useEffect untuk Update Jam (Setiap detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setWaktu(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Array kosong karena jam jalan terus sejak awal

  // --- TUGAS MANDIRI 1: Update Document Title ---
  // useEffect ini hanya akan jalan kalau isi variabel [kota] berubah
  useEffect(() => {
    document.title = `Jam ${kota}`;
    console.log("Judul tab berubah!"); // Cek di console browser
  }, [kota]); // Inilah yang disebut Dependency Array

  return (
    <div className="text-center mb-4 p-3 border rounded bg-light shadow-sm">
      <h5>Waktu Sistem Server</h5>
      <h2 className="text-primary fw-bold">
        {waktu.toLocaleTimeString()}
      </h2>

      {/* Input Text untuk Nama Kota */}
      <div className="mt-3 mx-auto" style={{ maxWidth: '300px' }}>
        <label className="small d-block mb-1 text-muted">Set Lokasi:</label>
        <input
          type="text"
          className="form-control form-control-sm text-center"
          value={kota}
          onChange={(e) => setKota(e.target.value)}
          placeholder="Masukkan nama kota..."
        />
      </div>
    </div>
  );
}

export default JamDigital;