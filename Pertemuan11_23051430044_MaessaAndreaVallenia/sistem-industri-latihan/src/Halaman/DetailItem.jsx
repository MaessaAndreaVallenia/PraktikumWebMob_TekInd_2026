import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function DetailItem() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data ini disamakan dengan yang ada di halaman Inventori
  const dataBahanBaku = [
    { id: 1, nama: "Baja Karbon High Grade", deskripsi: "Baja kualitas tinggi untuk rangka utama mesin.", spesifikasi: "Ketebalan 10mm, Anti Karat" },
    { id: 2, nama: "Aluminium Batangan", deskripsi: "Bahan ringan untuk komponen aerodinamis.", spesifikasi: "Grade 6061, Panjang 2m" },
    { id: 3, nama: "Baut Industri M12", deskripsi: "Baut pengunci kekuatan tinggi untuk beban berat.", spesifikasi: "Baja Hitam, Ulir Kasar" },
    { id: 4, nama: "Pelumas Mesin Hidrolik", deskripsi: "Cairan pelumas untuk menjaga suhu mesin tetap stabil.", spesifikasi: "ISO VG 46, Tahan Panas" },
    { id: 5, nama: "Lembaran Tembaga", deskripsi: "Konduktor terbaik untuk jalur kelistrikan panel.", spesifikasi: "Kemurnian 99%, Tebal 0.5mm" },
    { id: 6, nama: "Plat Besi Antikarat", deskripsi: "Plat pelapis dinding mesin agar tidak mudah korosi.", spesifikasi: "Ukuran 1x2 meter, Grade A" }
  ];

  useEffect(() => {
    setLoading(true);
    // Cari data berdasarkan ID yang ada di URL
    const temukanData = dataBahanBaku.find(produk => produk.id === parseInt(id));
    
    // Loading 
    setTimeout(() => {
      setItem(temukanData);
      setLoading(false);
    }, 200);
  }, [id]);

  if (loading) return <div className="container mt-5"><p>Memuat detail...</p></div>;

  if (!item) return (
    <div className="container mt-5 text-center">
      <h3>Data Tidak Ditemukan</h3>
      <Link to="/inventori" className="btn btn-secondary mt-3">Kembali</Link>
    </div>
  );

  return (
    <div className="container mt-5">
     
      <Link to="/inventori" className="text-decoration-none d-inline-block mb-3">
        ← Kembali ke Daftar Inventori
      </Link>

      <div className="card shadow-sm border-0 rounded-3">
        <div className="card-header bg-dark text-white py-3">
          <h2 className="m-0 fw-bold">Detail Bahan: {item.nama}</h2>
        </div>
        
        <div className="card-body p-4">
          <div className="mb-4">
            <h5 className="fw-bold text-secondary">Deskripsi</h5>
            <p className="fs-5">{item.deskripsi}</p>
          </div>
          
          <div className="mb-4">
            <h5 className="fw-bold text-secondary">Spesifikasi Teknis</h5>
            <p className="fw-bold text-primary">{item.spesifikasi}</p>
          </div>

          <div className="p-3 bg-light rounded border">
            <small className="text-muted">ID Sistem: #00{item.id} | Diverifikasi oleh: <strong>Maessa Andrea Vallenia</strong></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;