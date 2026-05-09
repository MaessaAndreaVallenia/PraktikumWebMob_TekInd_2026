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
      <header className="navbar navbar-dark sticky-top bg-dark p-2 shadow d-md-none">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold m-0" href="#">TI - UNY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>

      <div className="row g-0">
        <Sidebar aktif="laporan" />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-3 px-md-4">

          <div className="d-flex flex-row justify-content-between align-items-start pt-4 pb-3 mb-4 border-bottom bg-white mt-3 px-3 rounded-3 shadow-sm">
            <div className="text-start">
               <h1 className="h4 fw-bold m-0 text-dark">Laporan Kualitas QC</h1>
               <small className="text-danger fw-bold d-block">
                 ● Quality Control & Maintenance Log
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
                <div className="card border-0 shadow-sm p-3 bg-white h-100 border-start border-dark border-4">
                   <small className="text-muted d-block fw-bold mb-1" style={{fontSize: '0.65rem'}}>TOTAL TEMUAN</small>
                   <h4 className="fw-bold m-0">12 <small className="fs-6">Kasus</small></h4>
                </div>
             </div>
             <div className="col-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white h-100 border-start border-success border-4">
                   <small className="text-muted d-block fw-bold mb-1" style={{fontSize: '0.65rem'}}>SELESAI</small>
                   <h4 className="fw-bold text-success m-0">9 <small className="fs-6 text-muted font-normal">Kasus</small></h4>
                </div>
             </div>
             <div className="col-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white h-100 border-start border-warning border-4">
                   <small className="text-muted d-block fw-bold mb-1" style={{fontSize: '0.65rem'}}>PENDING</small>
                   <h4 className="fw-bold text-warning m-0">2 <small className="fs-6 text-muted font-normal">Kasus</small></h4>
                </div>
             </div>
             <div className="col-6 col-lg-3">
                <div className="card border-0 shadow-sm p-3 bg-white h-100 border-start border-danger border-4">
                   <small className="text-muted d-block fw-bold mb-1" style={{fontSize: '0.65rem'}}>URGENT</small>
                   <h4 className="fw-bold text-danger m-0">1 <small className="fs-6 text-muted font-normal">Kasus</small></h4>
                </div>
             </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 mb-5 overflow-hidden">
            <div className="card-header bg-dark text-white py-3 d-flex justify-content-between align-items-center">
              <span className="small fw-bold text-uppercase">Quality Control Logs</span>
              <button className="btn btn-outline-light btn-sm fw-bold px-3 rounded-pill" style={{fontSize: '10px'}} onClick={() => window.print()}>
                🖨️ CETAK PDF
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center mb-0">
                <thead className="table-light small fw-bold text-secondary">
                  <tr>
                    <th>TANGGAL</th>
                    <th className="text-start ps-4">ITEM / MESIN</th>
                    <th>JENIS CACAT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '0.85rem' }}>
                  {dataQC.map((qc, i) => (
                    <tr key={i}>
                      <td className="text-muted">{qc.tgl}</td>
                      <td className="text-start ps-4 fw-bold text-primary">{qc.item}</td>
                      <td className="text-danger fw-bold">{qc.cacat}</td>
                      <td>
                        <span className={`badge rounded-pill ${qc.status === 'Reported' ? 'bg-success' : 'bg-danger'} px-3`} style={{fontSize: '0.65rem'}}>
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
              &copy; 2026 Lab ERP - <strong>Universitas Negeri Yogyakarta</strong>
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