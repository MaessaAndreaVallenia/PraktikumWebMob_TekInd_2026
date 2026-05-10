import React from 'react';
import { Link } from 'react-router-dom'; // Ditambahkan agar link berfungsi
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
      {/* 1. TOP NAVBAR MOBILE */}
      <header className="navbar navbar-dark sticky-top bg-dark p-2 shadow d-md-none">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold m-0" href="#">TI - UNY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>

      <div className="row g-0">
        {/* 2. SIDEBAR */}
        <Sidebar aktif="inventori" />

        {/* 3. KONTEN UTAMA */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-3 px-md-4">
          
          {/* HEADER AREA */}
          <div className="d-flex flex-row justify-content-between align-items-start pt-4 pb-3 mb-4 border-bottom bg-white mt-3 px-3 rounded-3 shadow-sm">
            <div className="text-start">
               <h1 className="h4 fw-bold m-0 text-dark">Data Stock Inventori</h1>
               <small className="text-primary fw-bold d-block">
                 ● Manajemen Logistik & Gudang
               </small>
            </div>
            
            <div className="d-flex align-items-center bg-light p-2 rounded-pill px-3 border shadow-sm">
              <div className="text-end me-2 d-none d-sm-block">
                <div className="fw-bold text-dark" style={{ fontSize: '0.75rem', lineHeight: '1' }}>
                  Maessa Andrea
                </div>
                <div className="text-muted" style={{ fontSize: '0.65rem' }}>
                  23051430044
                </div>
              </div>
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold shadow-sm" 
                   style={{ minWidth: '35px', height: '35px', fontSize: '0.7rem', border: '2px solid #fff' }}>
                MA
              </div>
            </div>
          </div>

          {/* 4. KARTU STATISTIK (KPI) */}
          <div className="row g-3 mb-4">
             <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-primary border-4 h-100 text-center text-md-start">
                   <small className="text-muted fw-bold mb-1" style={{fontSize: '0.65rem'}}>TOTAL ITEM</small>
                   <h4 className="fw-bold m-0">128 Sku</h4>
                </div>
             </div>
             <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-warning border-4 h-100 text-center text-md-start">
                   <small className="text-muted fw-bold mb-1" style={{fontSize: '0.65rem'}}>LOW STOCK</small>
                   <h4 className="fw-bold text-warning m-0">3 Item</h4>
                </div>
             </div>
             <div className="col-12 col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-danger border-4 h-100 text-center text-md-start">
                   <small className="text-muted fw-bold mb-1" style={{fontSize: '0.65rem'}}>OUT OF STOCK</small>
                   <h4 className="fw-bold text-danger m-0">1 Item</h4>
                </div>
             </div>
          </div>

          {/* 5. TABEL DATA */}
          <div className="card border-0 shadow-sm rounded-3 mb-5 overflow-hidden">
            <div className="card-header bg-dark text-white py-3 d-flex justify-content-between align-items-center">
              <span className="small fw-bold">STOCK MONITORING</span>
              <button className="btn btn-primary btn-sm fw-bold px-3 rounded-pill" style={{fontSize: '10px'}}>+ Tambah Barang</button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center mb-0">
                <thead className="table-light small fw-bold text-secondary">
                  <tr>
                    <th>ID</th>
                    <th className="text-start ps-4">NAMA ITEM</th>
                    <th>LOKASI</th>
                    <th>STOK</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.85rem' }}>
                  {dataStok.map((item) => (
                    <tr key={item.id}>
                      <td className="text-muted">#{item.id}</td>
                      <td className="text-start ps-4 fw-bold">
                        {/* Nama item sekarang bisa diklik menuju detail */}
                        <Link to={`/inventori/${item.id}`} className="text-primary text-decoration-none">
                          {item.nama}
                        </Link>
                      </td>
                      <td>{item.lokasi}</td>
                      <td className="fw-bold">{item.stok}</td>
                      <td>
                        <span className={`badge rounded-pill ${
                          item.status === 'Available' ? 'bg-success' : 
                          item.status === 'Low Stock' ? 'bg-warning text-dark' : 'bg-danger'
                        } px-3`} style={{fontSize: '0.65rem'}}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Inventori;