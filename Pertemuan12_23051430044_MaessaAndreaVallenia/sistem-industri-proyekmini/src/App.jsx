import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Halaman/Dashboard';
import Inventori from './Halaman/Inventori';
import Laporan from './Halaman/Laporan';
import DetailItem from './Halaman/DetailItem'; 
import NotFound from './Halaman/NotFound'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/inventori" element={<Inventori />} />
      <Route path="/inventori/:id" element={<DetailItem />} /> 
      <Route path="/laporan" element={<Laporan />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;