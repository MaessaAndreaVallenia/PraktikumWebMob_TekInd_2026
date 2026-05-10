import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-dark">404</h1>
        <p className="fs-3"> <span className="text-danger">Opps!</span> Halaman tidak ditemukan.</p>
        <p className="lead">
            Alamat yang Maessa cari sepertinya sedang dalam maintenance atau salah ketik.
        </p>
        <Link to="/" className="btn btn-primary shadow-sm px-4">
          Kembali ke Dashboard
        </Link>
        <div className="mt-4">
            <small className="text-muted">Sistem Monitoring Teknik Industri</small>
        </div>
      </div>
    </div>
  );
}

export default NotFound;