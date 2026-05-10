import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../Komponen/Sidebar';

function DetailItem() {
  const { id } = useParams();
  
  // 1. State untuk data, loading, dan error
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. Fetch data berdasarkan ID
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        // Ganti dengan URL API detail kamu, contoh: `/api/inventori/${id}`
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
          throw new Error('Data item tidak ditemukan di server.');
        }

        const data = await response.json();

        // Simulasi pemetaan data API ke format UI kita
        const mappedData = {
          nama: data.title.substring(0, 30),
          spek: data.body,
          supplier: 'PT. Industri Terpadu',
          tgl: '10 Mei 2026',
          stok: Math.floor(Math.random() * 100) + ' Unit'
        };

        setItem(mappedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  // 3. Tampilan Loading
  if (loading) {
    return (
      <div className="container p-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Mengambil detail barang...</p>
      </div>
    );
  }

  // 4. Tampilan Error
  if (error || !item) {
    return (
      <div className="container p-5 text-center">
        <h3 className="text-danger">Ups! {error || 'Item Tidak Ditemukan'}</h3>
        <Link to="/inventori" className="btn btn-primary mt-3">Kembali ke Inventori</Link>
      </div>
    );
  }

  return (
    <div className="container-fluid p-0 bg-light min-vh-100">
      {/* TOP NAVBAR MOBILE */}
      <header className="navbar navbar-dark sticky-top bg-dark p-2 shadow d-md-none">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand fw-bold m-0" href="#">TI - UNY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </header>

      <div className="row g-0">
        <Sidebar aktif="inventori" />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-3 px-md-4">
          
          {/* HEADER AREA */}
          <div className="d-flex flex-row justify-content-between align-items-start pt-4 pb-3 mb-4 border-bottom bg-white mt-3 px-3 rounded-3 shadow-sm">
            <div className="text-start">
               <h1 className="h4 fw-bold m-0 text-dark">Detail Spesifikasi</h1>
               <small className="text-primary fw-bold d-block">
                 ● Inventory ID: #INV-00{id}
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

          <Link to="/inventori" className="btn btn-outline-dark btn-sm mb-4 fw-bold rounded-pill px-3">
            ← Kembali ke Inventori
          </Link>
          
          <div className="card border-0 shadow-sm p-4 rounded-4 mb-5">
            <div className="row">
              <div className="col-12 col-lg-7 border-end-lg">
                <h2 className="fw-bold text-primary mb-3 text-capitalize">{item.nama}</h2>
                <h5 className="fw-bold small text-muted text-uppercase mb-3">Spesifikasi Teknik</h5>
                <div className="bg-light p-4 border rounded-4 mb-4">
                   <p className="mb-0 text-dark" style={{ lineHeight: '1.6' }}>{item.spek}</p>
                </div>
              </div>
              
              <div className="col-12 col-lg-5 ps-lg-5 mt-4 mt-lg-0">
                <h5 className="fw-bold small text-muted text-uppercase mb-3">Detail Logistik</h5>
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <tbody>
                      <tr className="border-bottom">
                        <td className="text-muted py-3">Status Stok</td>
                        <td className="fw-bold text-end py-3 text-success">{item.stok}</td>
                      </tr>
                      <tr className="border-bottom">
                        <td className="text-muted py-3">Main Supplier</td>
                        <td className="fw-bold text-end py-3">{item.supplier}</td>
                      </tr>
                      <tr className="border-bottom">
                        <td className="text-muted py-3">Kedatangan Terakhir</td>
                        <td className="fw-bold text-end py-3">{item.tgl}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DetailItem;