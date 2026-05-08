import React from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';

// Mendaftarkan komponen ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

function GrafikProduksi() {
  // Data untuk Grafik
  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    datasets: [
      {
        label: 'Jumlah Produksi (Unit)',
        data: [120, 150, 180, 170, 200, 210], 
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Target',
        data: [150, 150, 150, 150, 150, 150], 
        type: 'line', // Tipe campuran (Bar + Line)
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  // Opsi Tampilan Grafik
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Biar grafik bisa menyesuaikan tinggi container
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: { size: 11 }
        }
      },
      title: {
        display: false, // Dimatikan karena judul sudah ada di Card Dashboard
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { font: { size: 10 } }
      },
      x: {
        ticks: { font: { size: 10 } }
      }
    },
  };

  return (
    <div style={{ height: '250px' }}> {/* Memberi batas tinggi agar rapi */}
      <Bar data={data} options={options} />
    </div>
  );
}

export default GrafikProduksi;