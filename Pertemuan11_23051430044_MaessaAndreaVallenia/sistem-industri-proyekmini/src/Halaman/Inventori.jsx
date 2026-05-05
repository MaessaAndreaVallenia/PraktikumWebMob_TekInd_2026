import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Inventori() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data Inventori 
  const dataBahanBaku = [
    { id: 1, nama: "Baja Karbon High Grade", status: "Available", stok: "500 kg", lokasi: "Gudang A" },
    { id: 2, nama: "Aluminium Batangan", status: "Available", stok: "250 unit", lokasi: "Gudang B" },
    { id: 3, nama: "Baut Industri M12", status: "Low Stock", stok: "50 box", lokasi: "Gudang A" },
    { id: 4, nama: "Pelumas Mesin Hidrolik", status: "Available", stok: "100 liter", lokasi: "Gudang C" },
    { id: 5, nama: "Lembaran Tembaga", status: "Out of Stock", stok: "0 unit", lokasi: "Gudang B" },
    { id: 6, nama: "Plat Besi Antikarat", status: "Available", stok: "150 lembar", lokasi: "Gudang A" },
    { id: 7, nama: "Kabel Tembaga Industri", status: "Available", stok: "300 meter", lokasi: "Gudang C" },
    { id: 8, nama: "Cat Anti Korosi Blue", status: "Low Stock", stok: "20 galon", lokasi: "Gudang C" },
    { id: 9, nama: "Pipa Stainless Steel", status: "Available", stok: "80 batang", lokasi: "Gudang B" },
    { id: 10, nama: "Gas Argon Welding", status: "Available", stok: "15 tabung", lokasi: "Gudang A" }
  ];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProducts(dataBahanBaku);
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="fw-bold m-0"><span className="me-3"></span>📂 Data Stock Inventori</h1>
          <p className="text-muted ms-4 ps-2"><strong>Operator: Maessa Andrea Vallenia (23051430044)</strong></p>
        </div>
        <div className="btn-group shadow-sm">
          <Link to="/" className="btn btn-outline-primary">
            Dashboard
          </Link>
          <Link to="/laporan" className="btn btn-outline-danger">
            Laporan Kualitas
          </Link>
        </div>
      </div>

      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-header bg-dark py-3">
            <h5 className="text-white m-0">Stock Monitoring</h5>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
            <h5 className="mt-3 text-muted">Sinkronisasi data Maessa...</h5>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th className="ps-4" style={{ width: '80px' }}>ID</th>
                  <th>Nama Bahan Baku</th>
                  <th>Lokasi Penyimpanan</th>
                  <th>Stok</th>
                  <th className="text-end pe-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.id}>
                    <td className="ps-4 text-muted">#{item.id}</td>
                    <td>
                      <Link 
                        to={`/inventori/${item.id}`} 
                        className="text-decoration-none fw-bold text-primary"
                      >
                        {item.nama}
                      </Link>
                    </td>
                    <td><i className="bi bi-geo-alt me-1"></i>{item.lokasi}</td>
                    <td className="fw-semibold">{item.stok}</td>
                    <td className="text-end pe-4">
                      <span className={`badge rounded-pill px-3 py-2 ${
                        item.status === 'Available' ? 'bg-success-subtle text-success border border-success' : 
                        item.status === 'Low Stock' ? 'bg-warning-subtle text-warning-emphasis border border-warning' : 
                        'bg-danger-subtle text-danger border border-danger'
                      }`}>
                        ● {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <footer className="mt-4 text-center text-muted small pb-4">
        &copy; Sistem Informasi Pabrik | Dikelola oleh <strong>Maessa Andrea Vallenia</strong>
      </footer>
    </div>
  );
}

export default Inventori;