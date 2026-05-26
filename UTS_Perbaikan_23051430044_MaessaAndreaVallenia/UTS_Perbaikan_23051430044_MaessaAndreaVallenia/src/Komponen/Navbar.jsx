import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 px-3">
      <div className="container">
        <Link className="navbar-brand" to="/">Sistem Pabrik</Link>
        <div className="navbar-nav ms-auto gap-2">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/input">Input Laporan</Link>
          <Link className="nav-link" to="/riwayat">Riwayat Data</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;