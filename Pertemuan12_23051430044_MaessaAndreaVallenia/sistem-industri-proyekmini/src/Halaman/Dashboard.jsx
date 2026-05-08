import React, { useState } from 'react';
import Sidebar from '../Komponen/Sidebar';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';

function Dashboard() {
  const [showDetail, setShowDetail] = useState(null);

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
        {/* SIDEBAR */}
        <Sidebar aktif="dashboard" />

        {/* MAIN CONTENT */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
          
          {/* HEADER (User Profile) */}
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-4 border-bottom">
            <div>
               <h1 className="h3 fw-bold m-0">Dashboard Monitoring</h1>
               <small className="text-success fw-bold">● Live Update: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</small>
            </div>
            <div className="d-flex align-items-center">
              <div className="text-end me-3 d-none d-sm-block">
                <div className="fw-bold small">Maessa Andrea Vallenia</div>
                <small className="text-muted" style={{ fontSize: '11px' }}>23051430044</small>
              </div>
              <img src="https://ui-avatars.com/api/?name=Maessa+Andrea&background=0D6EFD&color=fff" className="rounded-circle shadow-sm" width="40" alt="profile" />
            </div>
          </div>

          {/* KPI CARDS (Statistik Cepat Teknik Industri) */}
          <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm p-3 bg-primary text-white h-100">
                <small className="d-block opacity-75">Total Output</small>
                <h4 className="fw-bold m-0">2,450 <small className="fs-6 fw-normal">Unit</small></h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm p-3 bg-success text-white h-100">
                <small className="d-block opacity-75">OEE Rate</small>
                <h4 className="fw-bold m-0">92.4%</h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm p-3 bg-warning text-dark h-100">
                <small className="d-block opacity-75">Down Time</small>
                <h4 className="fw-bold m-0">12 <small className="fs-6 fw-normal">Menit</small></h4>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card border-0 shadow-sm p-3 bg-danger text-white h-100">
                <small className="d-block opacity-75">Defect Rate</small>
                <h4 className="fw-bold m-0">0.8%</h4>
              </div>
            </div>
          </div>

          {/* GRAFIK SECTION */}
          <div className="row g-3 mb-4">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm p-3 h-100">
                <h6 className="fw-bold mb-3 small">Monitoring Output Per Jam</h6>
                <GrafikProduksi />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm p-3 h-100 text-center">
                <h6 className="fw-bold mb-3 small">Proporsi Defect</h6>
                <GrafikDonat />
              </div>
            </div>
          </div>

          {/* TABEL DATA */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="card-header bg-dark text-white py-2 fw-bold text-center small">
              Log Produksi Terakhir (Real-Time)
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center mb-0 small">
                <thead className="table-secondary fw-bold">
                  <tr>
                    <th>WAKTU</th><th>MESIN</th><th>OUTPUT</th><th>STATUS</th><th>AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>08:00</td><td>CNC-01 (Milling)</td><td>120 Unit</td>
                    <td><span className="badge bg-success px-3">NORMAL</span></td>
                    <td><button className="btn btn-sm btn-primary px-3 py-0" onClick={() => setShowDetail({id: 'CNC-01', text: 'Semua sensor stabil.', status: 'NORMAL', suhu: '42°C', efisiensi: '94%'})}>Detail</button></td>
                  </tr>
                  <tr>
                    <td>09:00</td><td>CNC-02 (Lathe)</td><td>150 Unit</td>
                    <td><span className="badge bg-success px-3">NORMAL</span></td>
                    <td><button className="btn btn-sm btn-primary px-3 py-0" onClick={() => setShowDetail({id: 'CNC-02', text: 'Pelumasan dilakukan.', status: 'NORMAL', suhu: '45°C', efisiensi: '92%'})}>Detail</button></td>
                  </tr>
                  <tr>
                    <td>10:00</td><td>Press-05</td><td>0 Unit</td>
                    <td><span className="badge bg-danger px-3">OFFLINE</span></td>
                    <td><button className="btn btn-sm btn-primary px-3 py-0" onClick={() => setShowDetail({id: 'Press-05', text: 'Motor Overheat.', status: 'OFFLINE', suhu: '88°C', efisiensi: '0%'})}>Detail</button></td>
                  </tr>
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

          {/* MODAL DETAIL LENGKAP */}
          {showDetail && (
            <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 2000 }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0 shadow-lg">
                  <div className="modal-header bg-dark text-white p-2 px-3">
                    <h6 className="modal-title">🔍 Rincian: {showDetail.id}</h6>
                    <button type="button" className="btn-close btn-close-white" onClick={() => setShowDetail(null)}></button>
                  </div>
                  <div className="modal-body p-4">
                    <div className="row g-3">
                      <div className="col-6 small">
                        <span className="text-muted d-block">Status Operasional</span>
                        <span className={`badge ${showDetail.status === 'OFFLINE' ? 'bg-danger' : 'bg-success'} px-3`}>{showDetail.status}</span>
                      </div>
                      <div className="col-6 text-end small">
                        <span className="text-muted d-block">Lokasi</span>
                        <span className="fw-bold">Lini Produksi A-1</span>
                      </div>
                      <hr className="my-2" />
                      <div className="col-12">
                        <p className="small mb-1"><strong>Catatan Sistem:</strong></p>
                        <div className="p-3 bg-light border rounded text-center small font-monospace">
                          "{showDetail.text}"
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 border rounded text-center bg-white">
                          <small className="text-muted d-block" style={{fontSize: '10px'}}>SUHU MESIN</small>
                          <strong className={showDetail.status === 'OFFLINE' ? 'text-danger' : 'text-primary'}>{showDetail.suhu}</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 border rounded text-center bg-white">
                          <small className="text-muted d-block" style={{fontSize: '10px'}}>EFISIENSI</small>
                          <strong className="text-success">{showDetail.efisiensi}</strong>
                        </div>
                      </div>
                      <div className="col-12 mt-3 text-center">
                        <div className="alert alert-info py-1 mb-0 border-0" style={{fontSize: '11px'}}>
                          Maintenance Terakhir: 12 April 2026
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer border-0 p-2">
                    <button className="btn btn-secondary btn-sm w-100" onClick={() => setShowDetail(null)}>Tutup</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;