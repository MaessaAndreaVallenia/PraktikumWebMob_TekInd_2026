import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ aktif }) {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse shadow-lg" style={{ minHeight: '100vh', zIndex: 1000 }}>
      <div className="position-sticky pt-4 px-3">
        {/* LOGO SECTION */}
        <div className="d-flex align-items-center mb-4 px-2 text-white">
          <h6 className="fw-bold m-0 text-uppercase" style={{ letterSpacing: '1px' }}>Teknik Industri</h6>
        </div>
        
        <hr className="border-secondary mb-4" />

        {/* MENU SECTION */}
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className={`nav-link d-flex align-items-center px-3 py-2 ${aktif === 'dashboard' ? 'text-white bg-primary rounded shadow-sm' : 'text-secondary'}`}>
              <span className="me-2">📊</span> Dashboard Utama
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/inventori" className={`nav-link d-flex align-items-center px-3 py-2 ${aktif === 'inventori' ? 'text-white bg-primary rounded shadow-sm' : 'text-secondary'}`}>
              <span className="me-2">📦</span> Menu Inventori
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/laporan" className={`nav-link d-flex align-items-center px-3 py-2 ${aktif === 'laporan' ? 'text-white bg-primary rounded shadow-sm' : 'text-secondary'}`}>
              <span className="me-2">📋</span> Menu Laporan
            </Link>
          </li>
        </ul>

        {/* USER PROFILE INFO (Mobile Only) */}
        <div className="d-md-none mt-5 p-3 bg-secondary rounded text-white small">
          Operator: Maessa A.V.
        </div>
      </div>

      <style>{`
        .nav-link { transition: 0.2s; border-radius: 5px; text-decoration: none; font-size: 0.9rem; }
        .nav-link:hover { color: white !important; background-color: rgba(255,255,255,0.1); }
      `}</style>
    </nav>
  );
}

export default Sidebar;