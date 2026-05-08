import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  PointElement,
  LineElement,
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

function GrafikProduksi() {
  // 1. Siapkan State untuk menampung data (awalnya kosong)
  const [dataProduksi, setDataProduksi] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Simulasi Fetch API menggunakan useEffect
  useEffect(() => {
    // Fungsi simulasi mengambil data dari server
    const ambilDataPabrik = () => {
      setLoading(true);
      
      // Simulasi delay jaringan selama 1 detik
      setTimeout(() => {
        // Membuat 6 angka acak antara 100 - 250 (Generator Acak)
        const mockData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 151) + 100);
        
        setDataProduksi(mockData);
        setLoading(false);
      }, 1000);
    };

    ambilDataPabrik();
  }, []); // [] memastikan hanya jalan 1x saat Dashboard dibuka

  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    datasets: [
      {
        label: 'Produksi Aktual (Real-time)',
        data: dataProduksi, // Data dinamis dari state
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target Lini',
        data: [180, 180, 180, 180, 180, 180], // Garis target tetap
        type: 'line',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monitoring Output Lini 1' }
    }
  };

  // Tampilan saat data sedang "diambil"
  if (loading) {
    return <div className="text-center p-5">⏳ Menghubungkan ke Mesin...</div>;
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <Bar data={data} options={options} />
      <p className="text-center text-muted mt-2">
        <small>● Live data sinkron dengan sensor mesin</small>
      </p>
    </div>
  );
}

export default GrafikProduksi;