import React from 'react';

function RiwayatData({ data, onDelete }) {
  return (
    <div className="p-2">
      <h2 className="fw-bold text-dark mb-1">Riwayat Data Produksi</h2>
      
      <div className="table-responsive bg-white shadow-sm p-3 rounded-3 border">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>1. No</th>
              <th>2. Tanggal</th>
              <th>3. Shift</th>
              <th>4. ID Mesin</th>
              <th>5. Gross Prod</th>
              <th>6. Reject</th>
              <th>7. Netto</th>
              <th>8. Yield (%)</th>
              <th>9. Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr><td colSpan="9" className="text-center text-muted py-3">Belum ada data log laporan produksi.</td></tr>
            ) : (
              data.map((item, index) => {
                const netto = item.produksi - item.reject;
                const yieldRate = item.produksi > 0 ? ((netto / item.produksi) * 100).toFixed(2) : "0.00";
                return (
                  <tr key={item.id} className={item.shift.includes("Malam") ? "table-warning" : ""}>
                    <td>{index + 1}</td>
                    <td>{item.tanggal}</td>
                    <td><span className="badge bg-primary">{item.shift}</span></td>
                    <td className="fw-bold">{item.namaMesin}</td>
                    <td>{item.produksi.toLocaleString()} Pcs</td>
                    <td className="text-danger">{item.reject.toLocaleString()} Pcs</td>
                    <td className="text-success fw-bold">{netto.toLocaleString()} Pcs</td>
                    <td className="text-info fw-bold">{yieldRate}%</td>
                    <td>
                      <button className="btn btn-danger btn-sm rounded-2 shadow-sm" onClick={() => onDelete(item.id)}>
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RiwayatData;