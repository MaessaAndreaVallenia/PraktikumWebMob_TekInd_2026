import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🏭 Sistem Pabrik
        </Link>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/" end>Dashboard</NavLink>
          <NavLink className="nav-link" to="/inventori">Inventori</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
