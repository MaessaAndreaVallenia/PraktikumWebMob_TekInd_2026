import React, { useState, useEffect } from 'react';

function KalkulatorOEE() {
  const [inputs, setInputs] = useState({
    planTime: 480,
    runTime: 440,
    totalParts: 1000,
    goodParts: 950
  });

  // FITUR 1: Mengambil data dari localStorage saat pertama kali halaman dibuka
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('oee_history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  // FITUR 2: Menyimpan data ke localStorage setiap kali ada perubahan pada state history
  useEffect(() => {
    localStorage.setItem('oee_history', JSON.stringify(history));
  }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value === "" ? 0 : parseFloat(value);
    setInputs({ ...inputs, [name]: val });
  };

  // Logika Perhitungan OEE
  const availability = inputs.planTime > 0 ? Math.min(inputs.runTime / inputs.planTime, 1) : 0;
  const performance = inputs.runTime > 0 ? Math.min(inputs.totalParts / (inputs.runTime * 2.5), 1) : 0;
  const quality = inputs.totalParts > 0 ? Math.min(inputs.goodParts / inputs.totalParts, 1) : 0;
  const oee = (availability * performance * quality) * 100;

  // Penentuan Warna & Status
  let warnaTeks = "text-warning"; 
  let warnaBadge = "bg-warning text-dark";
  let statusLabel = "TYPICAL (Standar)";
  let rekomendasi = "Lakukan Preventive Maintenance untuk mengurangi minor stoppages.";

  if (oee < 50) {
    warnaTeks = "text-danger";
    warnaBadge = "bg-danger";
    statusLabel = "UNACCEPTABLE (Rendah)";
    rekomendasi = "Efisiensi kritis! Segera lakukan Kaizen pada ketersediaan mesin.";
  } else if (oee > 85) {
    warnaTeks = "text-success";
    warnaBadge = "bg-success";
    statusLabel = "WORLD CLASS (Sempurna)";
    rekomendasi = "Performa luar biasa! Pertahankan ritme kerja lini produksi.";
  }

  const simpanKeRiwayat = () => {
    if (inputs.planTime === 0 || inputs.totalParts === 0) {
      alert("Plan Time dan Total Parts tidak boleh nol!");
      return;
    }
    const dataBaru = {
      id: Date.now(),
      jam: new Date().toLocaleString('id-ID'), // Menambahkan tanggal agar log lebih jelas
      hasil: oee.toFixed(1),
      ...inputs
    };
    setHistory([dataBaru, ...history]);
  };

  // FITUR 3: Fungsi Reset Riwayat
  const resetRiwayat = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua riwayat produksi?")) {
      setHistory([]);
      localStorage.removeItem('oee_history');
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div className="bg-dark p-3 text-center">
          <h4 className="text-white fw-bold mb-0 text-uppercase">OEE Real-Time Monitor</h4>
          <small className="text-secondary text-uppercase">Maessa Andrea Vallenia - 23051430044</small>
        </div>

        <div className="card-body p-4 bg-light">
          <div className="row g-4">
            
            <div className="col-lg-5">
              {/* INPUT PANEL */}
              <div className="card border-0 shadow-sm p-3 mb-3 rounded-3 text-start">
                <h6 className="fw-bold text-muted mb-3"><i className="bi bi-pencil-square me-2"></i>Data Produksi</h6>
                <div className="row g-2">
                  <div className="col-6 mb-2">
                    <label className="small fw-bold">Plan Time (Min)</label>
                    <input type="number" name="planTime" className="form-control" value={inputs.planTime} onChange={handleChange} />
                  </div>
                  <div className="col-6 mb-2">
                    <label className="small fw-bold">Run Time (Min)</label>
                    <input type="number" name="runTime" className="form-control" value={inputs.runTime} onChange={handleChange} />
                  </div>
                  <div className="col-6 mb-2">
                    <label className="small fw-bold">Total Parts</label>
                    <input type="number" name="totalParts" className="form-control" value={inputs.totalParts} onChange={handleChange} />
                  </div>
                  <div className="col-6 mb-2">
                    <label className="small fw-bold">Good Parts</label>
                    <input type="number" name="goodParts" className="form-control" value={inputs.goodParts} onChange={handleChange} />
                  </div>
                </div>
                <button className="btn btn-primary w-100 mt-3 fw-bold shadow-sm" onClick={simpanKeRiwayat}>
                  SIMPAN KE LOG
                </button>
              </div>

              {/* ANALYTICS RESULT */}
              <div className="card border-0 shadow-sm p-4 text-center rounded-3">
                <span className={`badge ${warnaBadge} mb-2 px-3 py-2 align-self-center`}>{statusLabel}</span>
                <h1 className={`display-2 fw-bold ${warnaTeks} mb-0`}>{oee.toFixed(1)}%</h1>
                <div className="progress mt-3" style={{height: '12px'}}>
                  <div className={`progress-bar progress-bar-striped progress-bar-animated ${warnaBadge}`} 
                       style={{width: `${Math.min(oee, 100)}%`}}></div>
                </div>
                <div className="alert alert-info mt-4 py-3 small border-0 shadow-sm text-start">
                  <strong><i className="bi bi-lightbulb me-1"></i> Rekomendasi Industri:</strong><br/>
                  {rekomendasi}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              {/* LOG HISTORY */}
              <div className="card border-0 shadow-sm p-3 h-100 rounded-3 text-start">
                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                    <h6 className="fw-bold text-muted mb-0"><i className="bi bi-clock-history me-2"></i>Riwayat Log Produksi</h6>
                    {history.length > 0 && (
                        <button className="btn btn-outline-danger btn-sm" onClick={resetRiwayat}>
                            <i className="bi bi-trash me-1"></i> Reset Riwayat
                        </button>
                    )}
                </div>
                
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-secondary">
                      <tr className="small text-center">
                        <th>Waktu / Tanggal</th>
                        <th>Avail</th>
                        <th>Perf</th>
                        <th>Qual</th>
                        <th>OEE</th>
                      </tr>
                    </thead>
                    <tbody className="small text-center">
                      {history.length === 0 ? (
                        <tr><td colSpan="5" className="py-5 text-muted italic">Belum ada rekaman data shift ini.</td></tr>
                      ) : (
                        history.map((log) => (
                          <tr key={log.id}>
                            <td className="fw-bold text-primary" style={{fontSize: '0.75rem'}}>{log.jam}</td>
                            <td>{((log.runTime/log.planTime)*100).toFixed(0)}%</td>
                            <td>{((log.totalParts/(log.runTime*2.5))*100).toFixed(0)}%</td>
                            <td>{((log.goodParts/log.totalParts)*100).toFixed(0)}%</td>
                            <td className={`fw-bold ${log.hasil < 50 ? 'text-danger' : log.hasil > 85 ? 'text-success' : 'text-warning'}`}>
                                {log.hasil}%
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default KalkulatorOEE;