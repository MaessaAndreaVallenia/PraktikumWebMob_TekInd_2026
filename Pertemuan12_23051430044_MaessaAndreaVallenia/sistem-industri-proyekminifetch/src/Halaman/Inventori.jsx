import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import Sidebar from '../Komponen/Sidebar';

function Inventori() {
  // 2. Siapkan State untuk menampung data dari server
  const [dataStok, setDataStok] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. Fungsi Fetch API
  useEffect(() => {
    const fetchInventori = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=8');
        
        if (!response.ok) throw new Error('Gagal mengambil data stok');

        const result = await response.json();

        // Memetakan data API ke format tabel kita
        const mappedData = result.map((item, index) => ({
          id: item.id.toString(),
          nama: item.title.substring(0, 25), // Simulasi nama barang
          lokasi: index % 2 === 0 ? 'Gudang A' : 'Gudang B',
          stok: Math.floor(Math.random() * 1000) + ' Unit',
          status: index % 3 === 0 ? 'Available' : (index % 3 === 1 ? 'Low Stock' : 'Out of Stock')
        }));

        setDataStok(mappedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInventori();
  }, []);

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
        <Sidebar aktif="inventori" />

        <main className="col-md-9 ms-sm-auto col-lg-10 px-3 px-md-4">
          {/* HEADER PROFILE (KONSISTEN) */}
          <div className="d-flex flex-row justify-content-between align-items-start pt-4 pb-3 mb-4 border-bottom bg-white mt-3 px-3 rounded-3 shadow-sm">
            <div className="text-start">
               <h1 className="h4 fw-bold m-0 text-dark">Data Stock Inventori</h1>
               <small className="text-primary fw-bold d-block">● Manajemen Logistik & Gudang</small>
            </div>
            
            <div className="d-flex align-items-center bg-light p-2 rounded-pill px-3 border shadow-sm">
              <div className="text-end me-2 d-none d-sm-block">
                <div className="fw-bold text-dark" style={{ fontSize: '0.75rem', lineHeight: '1' }}>Maessa Andrea</div>
                <div className="text-muted" style={{ fontSize: '0.65rem' }}>23051430044</div>
              </div>
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold shadow-sm" 
                   style={{ minWidth: '35px', height: '35px', fontSize: '0.7rem', border: '2px solid #fff' }}>
                MA
              </div>
            </div>
          </div>

          {/* KARTU STATISTIK (Dihitung Otomatis dari Data API) */}
          <div className="row g-3 mb-4">
             <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-primary border-4 h-100">
                   <small className="text-muted fw-bold mb-1" style={{fontSize: '0.65rem'}}>TOTAL ITEM</small>
                   <h4 className="fw-bold m-0">{dataStok.length} Sku</h4>
                </div>
             </div>
             <div className="col-6 col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-warning border-4 h-100">
                   <small className="text-muted fw-bold mb-1" style={{fontSize: '0.65rem'}}>LOW STOCK</small>
                   <h4 className="fw-bold text-warning m-0">{dataStok.filter(x => x.status === 'Low Stock').length} Item</h4>
                </div>
             </div>
             <div className="col-12 col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-danger border-4 h-100">
                   <small className="text-muted fw-bold mb-1" style={{fontSize: '0.65rem'}}>OUT OF STOCK</small>
                   <h4 className="fw-bold text-danger m-0">{dataStok.filter(x => x.status === 'Out of Stock').length} Item</h4>
                </div>
             </div>
          </div>

          {/* TABEL DATA DENGAN KONDISI LOADING/ERROR */}
          <div className="card border-0 shadow-sm rounded-3 mb-5 overflow-hidden">
            <div className="card-header bg-dark text-white py-3 d-flex justify-content-between align-items-center">
              <span className="small fw-bold">STOCK MONITORING</span>
              <button className="btn btn-primary btn-sm fw-bold px-3 rounded-pill" style={{fontSize: '10px'}}>+ Tambah Barang</button>
            </div>
            <div className="table-responsive">
              {loading ? (
                <div className="text-center p-5">
                  <div className="spinner-border text-primary" role="status"></div>
                  <p className="mt-2 text-muted">Menghubungkan ke server...</p>
                </div>
              ) : error ? (
                <div className="text-center p-5 text-danger fw-bold">{error}</div>
              ) : (
                <table className="table table-hover align-middle text-center mb-0">
                  <thead className="table-light small fw-bold text-secondary">
                    <tr>
                      <th>ID</th>
                      <th className="text-start ps-4">NAMA ITEM</th>
                      <th>LOKASI</th>
                      <th>STOK</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: '0.85rem' }}>
                    {dataStok.map((item) => (
                      <tr key={item.id}>
                        <td className="text-muted">#{item.id}</td>
                        <td className="text-start ps-4 fw-bold">
                          <Link to={`/inventori/${item.id}`} className="text-primary text-decoration-none">
                            {item.nama}
                          </Link>
                        </td>
                        <td>{item.lokasi}</td>
                        <td className="fw-bold">{item.stok}</td>
                        <td>
                          <span className={`badge rounded-pill ${
                            item.status === 'Available' ? 'bg-success' : 
                            item.status === 'Low Stock' ? 'bg-warning text-dark' : 'bg-danger'
                          } px-3`} style={{fontSize: '0.65rem'}}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Inventori;