import React from 'react';
import { Link } from 'react-router-dom';

function LaporanKualitas() {
  // Data sesuai checklist (minimal 5+ item)
  const dataCacat = [
    { id: 1, tanggal: "2024-05-01", mesin: "CNC-Alpha", jenisCacat: "Goresan Permukaan", jumlah: "12 unit", status: "Reported" },
    { id: 2, tanggal: "2024-05-01", mesin: "Lathe-Beta", jenisCacat: "Dimensi Tidak Sesuai", jumlah: "5 unit", status: "In Review" },
    { id: 3, tanggal: "2024-05-02", mesin: "Press-Gamma", jenisCacat: "Retak Halus", jumlah: "8 unit", status: "Reported" },
    { id: 4, tanggal: "2024-05-02", mesin: "Welding-01", jenisCacat: "Penyambungan Kurang", jumlah: "3 unit", status: "Critical" },
    { id: 5, tanggal: "2024-05-03", mesin: "CNC-Alpha", jenisCacat: "Overheat Burn", jumlah: "2 unit", status: "Critical" },
    { id: 6, tanggal: "2024-05-03", mesin: "Drill-X", jenisCacat: "Lubang Melenceng", jumlah: "15 unit", status: "Reported" }
  ];

  return (
    <div className="container mt-4">
      {/* Header Section sesuai Gambar */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 className="fw-bold m-0"><span className="me-3"></span>📝 Data Laporan Kualitas</h1>
          <p className="text-muted ms-4 ps-2"><strong>Operator: Maessa Andrea Vallenia (23051430044)</strong></p>
        </div>
        
        {/* Tombol Navigasi dengan Ikon */}
        <div className="btn-group shadow-sm border rounded">
          <Link to="/" className="btn btn-white border-end py-2 px-3 text-primary d-flex align-items-center">
            Dashboard
          </Link>
          <Link to="/inventori" className="btn btn-white py-2 px-3 text-danger d-flex align-items-center">
            Data Inventori
          </Link>
        </div>
      </div>

      {/* Tabel Utama sesuai Gambar */}
      <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
        <div className="card-header bg-dark text-white text-center py-3">
          <h5 className="m-0 fw-bold">Quality Control Logs</h5>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 text-center">
            <thead className="table-light text-secondary border-bottom">
              <tr>
                <th style={{ width: '80px' }}>ID</th>
                <th>Tanggal Laporan</th>
                <th>Mesin Terkait</th>
                <th>Jenis Cacat</th>
                <th>Jumlah</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dataCacat.map((item) => (
                <tr key={item.id} className="border-bottom">
                  <td className="text-muted">#{item.id}</td>
                  <td className="fw-bold text-primary">{item.tanggal}</td>
                  <td className="text-dark">{item.mesin}</td>
                  <td className="text-dark">{item.jenisCacat}</td>
                  <td className="fw-bold text-dark">{item.jumlah}</td>
                  <td>
                    {/* Badge Status Warna-warni sesuai Gambar */}
                    <span 
                      className="badge rounded-pill px-3 py-2"
                      style={{ 
                        backgroundColor: 
                          item.status === 'Critical' ? '#fdecea' : 
                          item.status === 'In Review' ? '#fff9db' : '#e8f5e9', 
                        color: 
                          item.status === 'Critical' ? '#d32f2f' : 
                          item.status === 'In Review' ? '#f59f00' : '#2e7d32',
                        border: `1px solid ${
                          item.status === 'Critical' ? '#ffcdd2' : 
                          item.status === 'In Review' ? '#fff3bf' : '#c8e6c9'
                        }`,
                        fontWeight: '600',
                        fontSize: '0.85rem'
                      }}
                    >
                      ● {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <footer className="mt-4 text-center text-muted small">
        &copy; Sistem Informasi Pabrik | Dikelola oleh <strong>Maessa Andrea Vallenia</strong>
      </footer>
    </div>
  );
}

export default LaporanKualitas;