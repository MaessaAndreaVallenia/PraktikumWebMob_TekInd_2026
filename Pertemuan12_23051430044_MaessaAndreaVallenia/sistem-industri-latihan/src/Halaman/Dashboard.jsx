import React from 'react';
import GrafikProduksi from '../Komponen/GrafikProduksi';
import KartuMesin from '../Komponen/KartuMesin';
import GrafikDonat from '../Komponen/GrafikDonat';

function Dashboard() {
  return (
    <div className="container-fluid mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="fw-bold">Dashboard Pintar 4.0</h2>
          <hr />
        </div>
      </div>

      {/* BARIS ATAS: Grafik Batang (Kiri) dan Grafik Donat (Kanan Full) */}
      <div className="row mb-4">
        <div className="col-md-8">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <GrafikProduksi />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center justify-content-center">
              {/* Grafik Donat jadi full di sini */}
              <GrafikDonat />
            </div>
          </div>
        </div>
      </div>

      {/* BARIS TENGAH: Dua Kotak KPI yang dipindah ke bawah grafik */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card bg-primary text-white shadow-sm">
            <div className="card-body text-center">
              <h5>Total Output Hari Ini</h5>
              <h2 className="fw-bold">1,030 Unit</h2>
              <small>Update terakhir: 13:00</small>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card bg-success text-white shadow-sm">
            <div className="card-body text-center">
              <h5>Efficiency Rate</h5>
              <h2 className="fw-bold">92.4%</h2>
              <small>+1.2% dari kemarin</small>
            </div>
          </div>
        </div>
      </div>

      {/* BARIS BAWAH: Daftar Mesin */}
      <div className="row">
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