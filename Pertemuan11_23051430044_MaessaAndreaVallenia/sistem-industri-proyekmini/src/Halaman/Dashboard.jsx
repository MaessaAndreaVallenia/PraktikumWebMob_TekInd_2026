import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-dark text-white rounded-4 shadow-lg position-relative overflow-hidden">
        <div className="position-relative z-1">
          <h1 className="display-4 fw-bold">Sistem Kendali Pabrik</h1>
          <p className="fs-4 text-secondary">Selamat datang kembali, <strong>Maessa Andrea Vallenia</strong>. Pantau produktivitas dan kualitas dalam satu layar.</p>
          <hr className="my-4 border-secondary" />
          <p>Status Sistem: Online & Aktif</p>
        </div>
        {/* Dekorasi Background */}
        <div className="position-absolute top-0 end-0 p-5 opacity-25" style={{ fontSize: '15rem', transform: 'rotate(15deg)' }}>
            ⚙️
        </div>
      </div>

      {/* Stats Summary Section */}
      <div className="row g-4 mb-5">
        {/* Kartu Mesin Aktif (Hijau) */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-3 h-100" 
               style={{ backgroundColor: '#f8f9fa', borderLeft: '5px solid #52b788 !important', borderLeftStyle: 'solid' }}>
            <div className="card-body p-4 border-start border-success border-5 rounded-start">
              <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>MESIN AKTIF</h6>
              <h1 className="display-4 fw-bold m-0" style={{ color: '#52b788' }}>7/10</h1>
            </div>
          </div>
        </div>

        {/* Kartu Output (Biru) */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-3 h-100" 
               style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body p-4 border-start border-info border-5 rounded-start" style={{ borderLeftColor: '#63b3ed !important' }}>
              <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>OUTPUT</h6>
              <h1 className="display-4 fw-bold m-0" style={{ color: '#63b3ed' }}>2,000</h1>
            </div>
          </div>
        </div>

        {/* Kartu Stok Kritis (Kuning) */}
        <div className="col-md-4">
          <div className="card border-0 shadow-sm rounded-3 h-100" 
               style={{ backgroundColor: '#f8f9fa' }}>
            <div className="card-body p-4 border-start border-warning border-5 rounded-start">
              <h6 className="text-muted fw-bold mb-3" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>STOK KRITIS</h6>
              <h1 className="display-4 fw-bold m-0" style={{ color: '#f6ad55' }}>2</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Cards */}
      <h4 className="fw-bold mb-4">Navigasi Cepat</h4>
      <div className="row g-4">
        <div className="col-md-6">
          <Link to="/inventori" className="text-decoration-none">
            <div className="card h-100 border-0 shadow rounded-4 p-4 text-center hover-card" 
                 style={{ transition: '0.3s', backgroundColor: '#f8f9fa' }}>
              <div className="display-4 mb-3">📂</div>
              <h3 className="fw-bold text-dark">Manajemen Inventori</h3>
              <p className="text-muted">Cek ketersediaan bahan baku dan lokasi penyimpanan gudang.</p>
              <span className="btn btn-primary rounded-pill px-4">Buka Inventori</span>
            </div>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/laporan" className="text-decoration-none">
            <div className="card h-100 border-0 shadow rounded-4 p-4 text-center hover-card" 
                 style={{ transition: '0.3s', backgroundColor: '#f8f9fa' }}>
              <div className="display-4 mb-3">📝</div>
              <h3 className="fw-bold text-dark">Laporan Kualitas</h3>
              <p className="text-muted">Pantau data cacat produksi dan severity temuan pada mesin.</p>
              <span className="btn btn-danger rounded-pill px-4">Buka Laporan</span>
            </div>
          </Link>
        </div>
      </div>

      <footer className="mt-5 py-4 text-center text-muted">
        &copy; Sistem Informasi Pabrik | Dikelola oleh <strong>Maessa Andrea Vallenia</strong>
      </footer>

      {/* CSS internal sederhana untuk efek hover */}
      <style>{`
        .hover-card:hover {
          transform: translateY(-10px);
          background-color: #ffffff !important;
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>
    </div>
  );
}

export default Dashboard;