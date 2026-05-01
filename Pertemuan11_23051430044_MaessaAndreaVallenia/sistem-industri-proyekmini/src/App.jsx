import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import DetailItem from './Halaman/DetailItem';
import LaporanKualitas from './Halaman/LaporanKualitas'; // Import yang baru
import NotFound from './Halaman/NotFound';

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          {/* Gunakan Link untuk Brand/Logo */}
          <Link className="navbar-brand" to="/">Sistem Pabrik</Link>
          
          <div className="navbar-nav">
            {/* NavLink akan menambahkan class 'active' otomatis saat diklik */}
            <NavLink className="nav-link" to="/" end>Dashboard</NavLink>
            <NavLink className="nav-link" to="/inventori">Inventori</NavLink>
            <NavLink className="nav-link" to="/laporan">Laporan Kualitas</NavLink>
          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventori" element={<Inventori />} />
          <Route path="/inventori/:id" element={<DetailItem />} />
          {/* Route baru sesuai tugas no 3 */}
          <Route path="/laporan" element={<LaporanKualitas />} />
          {/* Handle 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;