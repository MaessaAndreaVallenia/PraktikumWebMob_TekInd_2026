import React from 'react';

function Dashboard({ data }) {
  const totalProduksi = data.reduce((sum, item) => sum + item.produksi, 0);
  const totalReject = data.reduce((sum, item) => sum + item.reject, 0);
  const totalNetto = totalProduksi - totalReject;
  const qualityYield = totalProduksi > 0 ? ((totalNetto / totalProduksi) * 100).toFixed(2) : "0.00";

  return (
    <div className="p-2">
      <h2 className="fw-bold text-dark mb-1">Dashboard Utama Pabrik</h2>
      <p className="text-muted small mb-4">Sistem monitoring terpadu PT. Manufaktur Jaya Abadi.</p>
      
      <div className="row g-3">
        <div className="col-md-4">
          <div className="card bg-primary text-white p-4 border-0 shadow-sm rounded-3">
            <h6 className="small text-white-50 text-uppercase fw-bold mb-1">Total Produksi</h6>
            <h3 className="fw-bold mb-0">{totalProduksi.toLocaleString()} Pcs</h3> 
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-danger text-white p-4 border-0 shadow-sm rounded-3">
            <h6 className="small text-white-50 text-uppercase fw-bold mb-1">Total Reject</h6>
            <h3 className="fw-bold mb-0">{totalReject.toLocaleString()} Pcs</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-success text-white p-4 border-0 shadow-sm rounded-3">
            <h6 className="small text-white-50 text-uppercase fw-bold mb-1">Quality Yield Rate</h6>
            <h3 className="fw-bold mb-0">{qualityYield}%</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 