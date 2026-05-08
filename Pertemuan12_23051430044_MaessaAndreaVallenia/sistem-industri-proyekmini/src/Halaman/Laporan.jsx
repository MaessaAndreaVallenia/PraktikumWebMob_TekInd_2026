import React from 'react';
import Sidebar from '../Komponen/Sidebar';

function Laporan() {
  const dataQC = [
    { tgl: '2026-05-01', item: 'Baja Karbon', cacat: 'Korosi Ringan', status: 'Reported' },
    { tgl: '2026-05-04', item: 'Mesin CNC-01', cacat: 'Goresan Mata Bor', status: 'Reported' },
    { tgl: '2026-05-05', item: 'Mesin Press-05', cacat: 'Motor Overheat', status: 'Critical' },
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
        <Sidebar aktif="laporan" />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
          {/* HEADER PROFILE (DISAMAKAN) */}
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-4 border-bottom">
            <div>
               <h1 className="h3 fw-bold m-0">Laporan Kualitas QC</h1>
               <small className="text-danger fw-bold">Quality Control & Maintenance Log</small>
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

          {/* KPI KUALITAS (Tambahan Ringkasan) */}
          <div className="row g-3 mb-4">
             <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white text-center h-100">
                   <small className="text-muted d-block small text-uppercase">Total Temuan</small>
                   <h5 className="fw-bold mb-0">12 Kasus</h5>
                </div>
             </div>
             <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white text-center h-100">
                   <small className="text-muted d-block small text-uppercase">Status Selesai</small>
                   <h5 className="fw-bold text-success mb-0">9 Kasus</h5>
                </div>
             </div>
             <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white text-center h-100">
                   <small className="text-muted d-block small text-uppercase">Status Pending</small>
                   <h5 className="fw-bold text-warning mb-0">2 Kasus</h5>
                </div>
             </div>
             <div className="col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white text-center h-100">
                   <small className="text-muted d-block small text-uppercase">Status Urgent</small>
                   <h5 className="fw-bold text-danger mb-0">1 Kasus</h5>
                </div>
             </div>
          </div>

          {/* Tabel Konten */}
          <div className="card border-0 shadow-sm rounded-3 mb-4">
            <div className="card-header bg-dark text-white py-2 d-flex justify-content-between align-items-center">
              <span className="small fw-bold">Quality Control Logs</span>
              <button className="btn btn-outline-light btn-sm" style={{fontSize: '10px'}} onClick={() => window.print()}>
                🖨️ Cetak Laporan
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center mb-0">
                <thead className="table-secondary fw-bold small">
                  <tr><th>Tanggal</th><th>Item / Mesin</th><th>Jenis Cacat</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {dataQC.map((qc, i) => (
                    <tr key={i}>
                      <td className="small">{qc.tgl}</td>
                      <td className="fw-bold text-primary">{qc.item}</td>
                      <td className="text-danger small">{qc.cacat}</td>
                      <td>
                        <span className={`badge px-3 ${qc.status === 'Reported' ? 'bg-success' : 'bg-danger'}`}>
                          {qc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="text-center py-4 border-top mt-auto">
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

export default Laporan;