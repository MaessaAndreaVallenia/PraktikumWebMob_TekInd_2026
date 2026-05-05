import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Inventori() {
  // State untuk menyimpan data produk
  const [products, setProducts] = useState([]);
  
  // LATIHAN 2: State untuk loading (boolean)
  const [loading, setLoading] = useState(true);

  // Data simulasi 6 bahan baku pabrik (Bahasa Indonesia)
  const dataBahanBaku = [
    { id: 1, nama: "Baja Karbon High Grade", status: "Available" },
    { id: 2, nama: "Aluminium Batangan", status: "Available" },
    { id: 3, nama: "Baut Industri M12", status: "Available" },
    { id: 4, nama: "Pelumas Mesin Hidrolik", status: "Available" },
    { id: 5, nama: "Lembaran Tembaga", status: "Available" },
    { id: 6, nama: "Plat Besi Antikarat", status: "Available" }
  ];

  useEffect(() => {
    // LATIHAN 2: Set loading true sebelum "mengambil" data
    setLoading(true);

    // Simulasi proses fetch data selama 1.5 detik
    const timer = setTimeout(() => {
      setProducts(dataBahanBaku);
      
      // LATIHAN 2: Set loading false setelah data masuk
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Data Inventori Bahan Baku</h1>
      
      <div className="mb-3">
        <Link to="/" className="btn btn-secondary">
          Kembali ke Dashboard
        </Link>
      </div>

      <hr />

      {/* LATIHAN 2: Kondisi jika loading true, tampilkan teks memuat */}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status"></div>
          <h4 className="mt-3 text-muted">Memuat data...</h4>
        </div>
      ) : (
        /* Jika loading false, maka tampilkan tabel (Latihan 1 ada di dalam sini) */
        <div className="table-responsive">
          <table className="table table-striped table-bordered shadow">
            {/* Judul tetap di tengah (text-center) */}
            <thead className="table-dark text-center">
              <tr>
                <th>ID Item</th> 
                <th>Nama Bahan</th>
                <th>Status Supplier</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.id} className="align-middle">
                  <td className="text-center">{item.id}</td>
                  <td className="text-start ps-4">
                    {/* LATIHAN 1: Link Dynamic Route ke detail berdasarkan ID */}
                    <Link 
                      to={`/inventori/${item.id}`} 
                      className="text-decoration-none fw-bold text-primary"
                    >
                      {item.nama}
                    </Link>
                  </td>
                  <td className="text-center">
                    <span className="badge bg-success px-3 py-2">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Inventori;