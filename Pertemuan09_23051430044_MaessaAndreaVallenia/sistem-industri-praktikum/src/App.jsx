// Import React
import React from 'react';
// Import komponen yang sudah dibuat
import KartuMesin from './Komponen/KartuMesin';

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Monitoring Lini Produksi A</h1>
  
    <div className="row">
      {/* Kolom 1: Menggunakan komponen dengan data berbeda */}
      <div className="col-md-4">
        <KartuMesin
          nama="CNC-Turning-01"
          status="Running"
          produksi={150}
        />
      </div>
      {/* Kolom 2 */}
      <div className="col-md-4">
        <KartuMesin
          nama="CNC-Milling-02"
          status="Maintenance"
          produksi={0}
        />
      </div>
      {/* Kolom 3 */}
      <div className="col-md-4">
        <KartuMesin
          nama="Press-Hydraulic-05"
          status="Stop"
          produksi={85}
        />
      </div>
    </div>
  </div>
  );
}
export default App;