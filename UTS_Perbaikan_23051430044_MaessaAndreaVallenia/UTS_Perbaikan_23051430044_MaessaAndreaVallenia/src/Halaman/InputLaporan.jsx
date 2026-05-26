import React, { useState } from 'react';

function InputLaporan({ onTambah }) {
  const [tanggal, setTanggal] = useState("");
  const [shift, setShift] = useState("");
  const [namaMesin, setNamaMesin] = useState("");
  const [produksi, setProduksi] = useState("");
  const [reject, setReject] = useState("");

  const numProduksi = Number(produksi) || 0;
  const numReject = Number(reject) || 0;
  const netto = numProduksi - numReject;
  const yieldRate = numProduksi > 0 ? ((netto / numProduksi) * 100).toFixed(2) : "0.00";

  const isRejectInvalid = numReject > numProduksi;
  const isFormEmpty = !tanggal || !shift || !namaMesin || produksi === "" || reject === "";
  const isTombolDisabled = isFormEmpty || isRejectInvalid;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (isTombolDisabled) return;

    onTambah({
      id: Date.now(),
      tanggal,
      shift,
      namaMesin,
      produksi: numProduksi,
      reject: numReject
    });

    setTanggal("");
    setShift("");
    setNamaMesin("");
    setProduksi("");
    setReject("");
    alert("Data valid berhasil disimpan ke memori State!");
  };

  return (
    <div className="p-2">
      <div className="card p-4 shadow-sm border-0 bg-white mx-auto" style={{ maxWidth: '500px' }}>
        <h4 className="fw-bold text-dark mb-1">Form Laporan Produksi</h4>
        <p className="text-muted small mb-4">Silakan isi 5 field log data di bawah ini.</p>
        
        <form onSubmit={handleSubmit}> 
          <div className="mb-3">
            <label className="form-label small fw-bold">Tanggal Kerja</label>
            <input type="date" className="form-control" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Shift Kerja</label>
            <select className="form-select" value={shift} onChange={(e) => setShift(e.target.value)} required>
              <option value="">-- Pilih Shift (3 Pilihan) --</option>
              <option value="Shift 1 - Pagi">Shift 1 - Pagi</option>
              <option value="Shift 2 - Siang">Shift 2 - Siang</option>
              <option value="Shift 3 - Malam">Shift 3 - Malam</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Nama Mesin</label>
            <input type="text" className="form-control" value={namaMesin} onChange={(e) => setNamaMesin(e.target.value)} placeholder="Contoh: CNC-01" required />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Jumlah Produksi</label>
            <input type="number" className="form-control" value={produksi} onChange={(e) => setProduksi(e.target.value)} placeholder="0" required />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold">Jumlah Reject</label>
            <input type="number" className={`form-control ${isRejectInvalid ? 'is-invalid' : ''}`} value={reject} onChange={(e) => setReject(e.target.value)} placeholder="0" required />
            {isRejectInvalid && <div className="invalid-feedback">Jumlah reject tidak boleh melebihi total produksi!</div>}
          </div>

          <div className="p-3 bg-light rounded-3 mb-3 small border">
            <div className="d-flex justify-content-between mb-1"><span>Kalkulasi Netto:</span><strong>{netto} Pcs</strong></div>
            <div className="d-flex justify-content-between"><span>Kalkulasi Yield:</span><strong>{yieldRate}%</strong></div>
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold" disabled={isTombolDisabled}>Simpan Log Laporan</button>
        </form>
      </div>
    </div>
  );
}

export default InputLaporan;    