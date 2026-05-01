import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import NotFound from './Halaman/NotFound';
// ... import lainnya
import DetailItem from './Halaman/DetailItem';

// Pastikan komponen Navbar ada di LUAR komponen App
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Sistem Pabrik</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/inventori">Inventori</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return ( 
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventori" element={<Inventori />} />
          <Route path="*" element={<NotFound />} />
          {/* LATIHAN 1: Route Dynamic */}
          <Route path="/inventori/:id" element={<DetailItem />} />
          {/* Halaman Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;