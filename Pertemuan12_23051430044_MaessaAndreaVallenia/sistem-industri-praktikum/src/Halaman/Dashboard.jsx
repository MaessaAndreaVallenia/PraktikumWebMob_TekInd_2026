import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';

function Dashboard() {
  return (
    <div className="container-fluid mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <h2>Dashboard Pintar 4.0</h2>
          <hr />
        </div>
      </div>

      {/* Bagian Grafik */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <GrafikProduksi />
            </div>
          </div>
        </div>

        {/* Bagian Ringkasan KPI */}
        <div className="col-md-4">
          <div className="card bg-primary text-white mb-3 shadow-sm">
            <div className="card-body text-center">
              <h5>Total Output Hari Ini</h5>
              <h2 className="fw-bold">1,030 Unit</h2>
              <small>Update terakhir: 13:00</small>
            </div>
          </div>

          <div className="card bg-success text-white shadow-sm">
            <div className="card-body text-center">
              <h5>Efficiency Rate</h5>
              <h2 className="fw-bold">92.4%</h2>
              <small>+1.2% dari kemarin</small>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Daftar Mesin */}
      <div className="row mt-4">
        <div className="col-12 mb-3">
          <h4>Status Mesin Aktif</h4>
        </div>
        <div className="col-md-3 mb-3">
          <KartuMesin nama="CNC-01" status="Running" produksi={320} />
        </div>
        <div className="col-md-3 mb-3">
          <KartuMesin nama="CNC-02" status="Running" produksi={310} />
        </div>
        <div className="col-md-3 mb-3">
          <KartuMesin nama="Press-01" status="Stop" produksi={150} />
        </div>
        <div className="col-md-3 mb-3">
          <KartuMesin nama="Weld-04" status="Maintenance" produksi={0} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;