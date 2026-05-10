import React, { useState } from 'react';
import Sidebar from '../Komponen/Sidebar';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import GrafikDonat from '../Komponen/GrafikDonat';

function Dashboard() {
  const [showDetail, setShowDetail] = useState(null);

  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      <header className="navbar navbar-dark sticky-top bg-dark p-2 shadow d-md-none">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold m-0" href="#">TI - UNY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>

      <div className="row g-0">
        <Sidebar aktif="dashboard" />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-3 px-md-4">

          <div className="d-flex flex-row justify-content-between align-items-start pt-4 pb-3 mb-4 border-bottom bg-white mt-3 px-3 rounded-3 shadow-sm">
            <div className="text-start">
               <h1 className="h4 fw-bold m-0 text-dark">Dashboard Monitoring</h1>
               <small className="text-success fw-bold d-block">
                 ● Live Update: {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
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

          <div className="row g-3 mb-4">
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm p-3 bg-primary text-white h-100 border-bottom border-white border-4">
                <small className="d-block opacity-75 fw-bold" style={{fontSize: '0.65rem'}}>TOTAL OUTPUT</small>
                <h4 className="fw-bold m-0">2,450 <small className="fs-6 fw-normal">Unit</small></h4>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm p-3 bg-success text-white h-100 border-bottom border-white border-4">
                <small className="d-block opacity-75 fw-bold" style={{fontSize: '0.65rem'}}>OEE RATE</small>
                <h4 className="fw-bold m-0">92.4%</h4>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm p-3 bg-warning text-dark h-100 border-bottom border-dark border-4">
                <small className="d-block opacity-75 fw-bold" style={{fontSize: '0.65rem'}}>DOWN TIME</small>
                <h4 className="fw-bold m-0">12 <small className="fs-6 fw-normal">Min</small></h4>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="card border-0 shadow-sm p-3 bg-danger text-white h-100 border-bottom border-white border-4">
                <small className="d-block opacity-75 fw-bold" style={{fontSize: '0.65rem'}}>DEFECT RATE</small>
                <h4 className="fw-bold m-0">0.8%</h4>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-12 col-lg-8">
              <div className="card border-0 shadow-sm p-3 h-100">
                <h6 className="fw-bold mb-3 small text-muted text-uppercase">Monitoring Output Per Jam</h6>
                <div style={{ minHeight: '250px' }}>
                  <GrafikProduksi />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card border-0 shadow-sm p-3 h-100 text-center">
                <h6 className="fw-bold mb-3 small text-muted text-uppercase">Proporsi Defect</h6>
                <div style={{ maxHeight: '250px' }}>
                  <GrafikDonat />
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 mb-5 overflow-hidden">
            <div className="card-header bg-dark text-white py-3 fw-bold text-center small">
              LOG PRODUKSI TERAKHIR (REAL-TIME)
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center mb-0">
                <thead className="table-light fw-bold small text-secondary">
                  <tr>
                    <th>WAKTU</th><th>MESIN</th><th>OUTPUT</th><th>STATUS</th><th>AKSI</th>
                  </tr>
                </thead>
                <tbody className="small">
                  <tr>
                    <td>08:00</td><td className="fw-bold">CNC-01</td><td>120 Unit</td>
                    <td><span className="badge rounded-pill bg-success px-3">NORMAL</span></td>
                    <td><button className="btn btn-sm btn-outline-primary fw-bold" style={{fontSize: '10px'}} onClick={() => setShowDetail({id: 'CNC-01', text: 'Semua sensor stabil.', status: 'NORMAL', suhu: '42°C', efisiensi: '94%'})}>DETAIL</button></td>
                  </tr>
                  <tr>
                    <td>09:00</td><td className="fw-bold">CNC-02</td><td>150 Unit</td>
                    <td><span className="badge rounded-pill bg-success px-3">NORMAL</span></td>
                    <td><button className="btn btn-sm btn-outline-primary fw-bold" style={{fontSize: '10px'}} onClick={() => setShowDetail({id: 'CNC-02', text: 'Pelumasan dilakukan.', status: 'NORMAL', suhu: '45°C', efisiensi: '92%'})}>DETAIL</button></td>
                  </tr>
                  <tr>
                    <td>10:00</td><td className="fw-bold">Press-05</td><td>0 Unit</td>
                    <td><span className="badge rounded-pill bg-danger px-3">OFFLINE</span></td>
                    <td><button className="btn btn-sm btn-outline-primary fw-bold" style={{fontSize: '10px'}} onClick={() => setShowDetail({id: 'Press-05', text: 'Motor Overheat.', status: 'OFFLINE', suhu: '88°C', efisiensi: '0%'})}>DETAIL</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <footer className="text-center py-4 border-top mt-auto">
            <small className="text-muted">
              &copy; 2026 Lab ERP - <strong>Universitas Negeri Yogyakarta</strong>
              <br/>
              <span className="text-primary fw-bold">Sistem Monitoring Terpadu</span>
            </small>
          </footer>

          {showDetail && (
            <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 2000 }}>
              <div className="modal-dialog modal-dialog-centered px-3">
                <div className="modal-content border-0 shadow-lg rounded-4">
                  <div className="modal-header bg-dark text-white">
                    <h6 className="modal-title fw-bold">🔍 Rincian: {showDetail.id}</h6>
                    <button type="button" className="btn-close btn-close-white" onClick={() => setShowDetail(null)}></button>
                  </div>
                  <div className="modal-body p-4">
                    <div className="row g-3">
                      <div className="col-6 small">
                        <span className="text-muted d-block mb-1">Status</span>
                        <span className={`badge rounded-pill ${showDetail.status === 'OFFLINE' ? 'bg-danger' : 'bg-success'} px-3`}>{showDetail.status}</span>
                      </div>
                      <div className="col-6 text-end small">
                        <span className="text-muted d-block mb-1">Lokasi</span>
                        <span className="fw-bold">Lini A-1</span>
                      </div>
                      <div className="col-12"><hr className="my-2" /></div>
                      <div className="col-12">
                        <div className="p-3 bg-light rounded-3 text-center small font-monospace border">
                          "{showDetail.text}"
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 border rounded-3 text-center bg-white">
                          <small className="text-muted d-block" style={{fontSize: '10px'}}>SUHU</small>
                          <strong className={showDetail.status === 'OFFLINE' ? 'text-danger' : 'text-primary'}>{showDetail.suhu}</strong>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="p-2 border rounded-3 text-center bg-white">
                          <small className="text-muted d-block" style={{fontSize: '10px'}}>EFISIENSI</small>
                          <strong className="text-success">{showDetail.efisiensi}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer border-0">
                    <button className="btn btn-dark w-100 rounded-pill fw-bold" onClick={() => setShowDetail(null)}>TUTUP</button>
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