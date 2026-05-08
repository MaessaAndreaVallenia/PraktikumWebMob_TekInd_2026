import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../Komponen/Sidebar';

function DetailItem() {
  const { id } = useParams();

  // Database detail untuk 5 produk
  const database = {
    '1': { nama: 'Baja Karbon High Grade', spek: 'Tipe: AISI 1045, Hardness: 170 HB', supplier: 'PT. Besi Utama', tgl: '12 April 2026', stok: '500 kg' },
    '2': { nama: 'Aluminium Batangan', spek: 'Seri: 6061, Tahan Korosi Tinggi', supplier: 'Logam Jaya CV', tgl: '05 Mei 2026', stok: '250 unit' },
    '3': { nama: 'Baut Industri M12', spek: 'Material: Stainless Steel 304', supplier: 'Baut Teknik PT', tgl: '01 Mei 2026', stok: '50 box' },
    '4': { nama: 'Mesin CNC-01 (Milling)', spek: 'Power: 7.5kW, 3-Axis Vertical', supplier: 'Global Tools', tgl: '10 Jan 2026', stok: '1 Unit' },
    '5': { nama: 'Mesin Press-05', spek: 'Kapasitas: 50 Ton, Stroke: 150mm', supplier: 'Presisi Mekanik', tgl: '20 Feb 2026', stok: '1 Unit' },
  };

  const item = database[id];

  if (!item) {
    return (
      <div className="container p-5 text-center">
        <h3>Item Tidak Ditemukan!</h3>
        <Link to="/inventori" className="btn btn-primary">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0 bg-light min-vh-100">
      <div className="row g-0">
        <Sidebar aktif="inventori" />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4">
          <Link to="/inventori" className="btn btn-outline-dark btn-sm mb-4">← Kembali ke Inventori</Link>
          
          <div className="card border-0 shadow-lg p-4 rounded-3">
            <h1 className="fw-bold text-primary mb-1">{item.nama}</h1>
            <p className="text-muted">ID Inventori: #INV-00{id}</p>
            <hr />
            <div className="row mt-4">
              <div className="col-md-7 border-end">
                <h5 className="fw-bold">Spesifikasi Teknik</h5>
                <div className="bg-light p-3 border rounded">
                   {item.spek}
                </div>
              </div>
              <div className="col-md-5 ps-md-4">
                <h5 className="fw-bold">Detail Logistik</h5>
                <table className="table table-sm mt-3">
                  <tbody>
                    <tr><td className="text-muted">Stok</td><td className="fw-bold">: {item.stok}</td></tr>
                    <tr><td className="text-muted">Supplier</td><td className="fw-bold">: {item.supplier}</td></tr>
                    <tr><td className="text-muted">Tgl. Masuk</td><td className="fw-bold">: {item.tgl}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DetailItem;