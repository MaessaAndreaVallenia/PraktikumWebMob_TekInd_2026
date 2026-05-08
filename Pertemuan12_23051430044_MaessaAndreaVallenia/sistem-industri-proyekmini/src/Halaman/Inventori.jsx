import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Komponen/Sidebar';

function Inventori() {
  const dataStok = [
    { id: '1', nama: 'Baja Karbon High Grade', lokasi: 'Gudang A', stok: '500 kg', status: 'Available' },
    { id: '2', nama: 'Aluminium Batangan', lokasi: 'Gudang B', stok: '250 unit', status: 'Available' },
    { id: '3', nama: 'Baut Industri M12', lokasi: 'Gudang A', stok: '50 box', status: 'Low Stock' },
    { id: '4', nama: 'Mesin CNC-01 (Milling)', lokasi: 'Lini 1', stok: '1 Unit', status: 'Available' },
    { id: '5', nama: 'Mesin Press-05', lokasi: 'Lini 3', stok: '1 Unit', status: 'Out of Stock' },
  ];

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* HEADER KHUSUS HP (Agar sidebar bisa dibuka) */}
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow d-md-none">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 fw-bold" href="#">TI - UNY</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>

      <div className="row g-0">
        <Sidebar aktif="inventori" />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
          {/* HEADER PROFILE (DISAMAKAN) */}
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-4 border-bottom">
            <div>
               <h1 className="h3 fw-bold m-0">Data Stock Inventori</h1>
               <small className="text-primary fw-bold">Manajemen Logistik & Gudang</small>
            </div>
            <div className="d-flex align-items-center">
              <div className="text-end me-3 d-none d-sm-block">
                <div className="fw-bold text-dark" style={{ fontSize: '1rem' }}>Maessa Andrea Vallenia</div>
                <div className="text-secondary small">23051430044</div>
              </div>
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center shadow-sm" 
                   style={{ width: '45px', height: '45px', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
                MA
              </div>
            </div>
          </div>

          {/* KPI INVENTORI (Tambahan agar keren) */}
          <div className="row g-3 mb-4 text-center">
             <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 border-bottom border-primary border-4">
                   <small className="text-muted d-block">Total Item</small>
                   <h5 className="fw-bold">128 Sku</h5>
                </div>
             </div>
             <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 border-bottom border-warning border-4">
                   <small className="text-muted d-block">Low Stock Alert</small>
                   <h5 className="fw-bold text-warning">3 Item</h5>
                </div>
             </div>
             <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 border-bottom border-danger border-4">
                   <small className="text-muted d-block">Out of Stock</small>
                   <h5 className="fw-bold text-danger">1 Item</h5>
                </div>
             </div>
          </div>

          {/* Tabel Konten */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="card-header bg-dark text-white py-2 d-flex justify-content-between align-items-center">
              <span className="small fw-bold">Stock Monitoring</span>
              <button className="btn btn-primary btn-sm" style={{fontSize: '10px'}}>+ Tambah Barang</button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center mb-0">
                <thead className="table-secondary fw-bold small">
                  <tr><th>ID</th><th>Nama Item</th><th>Lokasi</th><th>Stok</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {dataStok.map((item) => (
                    <tr key={item.id}>
                      <td className="small text-muted">#{item.id}</td>
                      <td className="text-start ps-4 fw-bold">
                        <Link to={`/inventori/${item.id}`} className="text-decoration-none text-primary">{item.nama}</Link>
                      </td>
                      <td>{item.lokasi}</td>
                      <td className={`fw-bold ${item.status === 'Low Stock' ? 'text-danger' : ''}`}>{item.stok}</td>
                      <td>
                        <span className={`badge px-3 ${item.status === 'Available' ? 'bg-success' : item.status === 'Low Stock' ? 'bg-warning text-dark' : 'bg-danger'}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="text-center py-4 border-top">
            <small className="text-muted">
              &copy; 2026 Lab ERP - Universitas Negeri Yogyakarta
              <br/>
              <span className="text-primary fw-bold">Sistem Monitoring Terpadu</span>
            </small>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Inventori;