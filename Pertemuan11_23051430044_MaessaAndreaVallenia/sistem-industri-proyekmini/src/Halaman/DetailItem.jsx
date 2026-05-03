import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data ini harus sama dengan yang ada di Inventori agar sinkron
  const dataBahanBaku = [
    { id: 1, nama: "Baja Karbon High Grade", deskripsi: "Baja karbon tinggi yang digunakan untuk konstruksi alat berat dan rangka mesin.", spesifikasi: "Tebal 10mm, ASTM A36", supplier: "PT. Krakatau Steel" },
    { id: 2, nama: "Aluminium Batangan", deskripsi: "Batangan aluminium murni untuk komponen mesin ringan.", spesifikasi: "Alloy 6061, Diameter 5cm", supplier: "PT. Inalum" },
    { id: 3, nama: "Baut Industri M12", deskripsi: "Baut pengunci standar industri dengan kekuatan tarik tinggi.", spesifikasi: "Grade 8.8, Zinc Plated", supplier: "Mitra Baut" },
    { id: 4, nama: "Pelumas Mesin Hidrolik", deskripsi: "Cairan pelumas khusus untuk menjaga suhu dan gesekan mesin tetap stabil.", spesifikasi: "ISO VG 46, Tahan Panas", supplier: "Pertamina Lubricants" },
    { id: 5, nama: "Lembaran Tembaga", deskripsi: "Lembaran konduktor tembaga untuk instalasi kelistrikan pabrik.", spesifikasi: "Murni 99%, Tebal 0.5mm", supplier: "Tembaga Jaya" }
  ];

  useEffect(() => {
    setLoading(true);
    // Kita cari data di array dataBahanBaku yang ID-nya cocok dengan ID di URL
    const dataDitemukan = dataBahanBaku.find(produk => produk.id === parseInt(id));

    // Simulasi loading sebentar biar kerasa real
    setTimeout(() => {
      setItem(dataDitemukan);
      setLoading(false);
    }, 300);
  }, [id]);

  if (loading) return (
    <div className="container mt-5 text-center">
      <div className="spinner-border text-primary"></div>
      <p className="mt-2">Sedang mengambil detail bahan Maessa...</p>
    </div>
  );

  // Jika ID di URL ngasal dan tidak ada di data kita
  if (!item) return (
    <div className="container mt-5 text-center">
      <h2 className="text-danger">Waduh! Data Tidak Ada</h2>
      <Link to="/inventori" className="btn btn-primary mt-3">Kembali ke Inventori</Link>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
        {/* Header Biru yang Cakep */}
        <div className="card-header bg-primary text-white p-4">
          <Link to="/inventori" className="text-white text-decoration-none mb-3 d-inline-block small">
            ← Kembali ke Inventori
          </Link>
          <h2 className="fw-bold m-0">{item.nama}</h2>
          <span className="badge bg-light text-primary mt-2">SKU: PBRK-00{item.id}</span>
        </div>
        
        <div className="card-body p-4 bg-white">
          <div className="row">
            <div className="col-md-7">
              <h5 className="fw-bold text-secondary border-bottom pb-2">Informasi Produk</h5>
              <p className="fs-5 text-dark" style={{ lineHeight: '1.6' }}>{item.deskripsi}</p>
              
              <h5 className="fw-bold text-secondary border-bottom pb-2 mt-4">Spesifikasi Teknis</h5>
              <p className="fw-semibold text-muted">{item.spesifikasi}</p>
            </div>
            
            <div className="col-md-5">
              <div className="p-4 rounded-4" style={{ backgroundColor: '#f8f9fa', border: '1px dashed #cbd5e0' }}>
                <h6 className="text-muted fw-bold small mb-3">DATA SUPPLIER</h6>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">🏢</span>
                  <p className="fw-bold m-0">{item.supplier}</p>
                </div>
                <div className="alert alert-success py-2 px-3 small border-0 mt-3">
                  ✅ Supplier Terverifikasi
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Nama */}
        <div className="card-footer bg-light text-center py-3 border-0">
          &copy; Sistem Informasi Pabrik | Dikelola oleh <strong>Maessa Andrea Vallenia</strong>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;