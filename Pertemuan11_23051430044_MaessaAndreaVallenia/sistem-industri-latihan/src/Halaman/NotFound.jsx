import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center" style={{ marginTop: '100px' }}>
      <h1 style={{ fontSize: '100px', color: '#dc3545' }}>404</h1>
      <h2>Waduh! Halaman Tidak Ditemukan</h2>
      <p className="text-muted">Alamat yang kamu masukkan salah atau halaman sudah pindah.</p>
      <Link to="/" className="btn btn-primary mt-3">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;