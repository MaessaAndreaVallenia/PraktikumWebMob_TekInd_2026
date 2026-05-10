import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function GrafikDonat() {
  const data = {
    labels: ['Scratch', 'Dent', 'Lainnya'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // WAJIB false biar tingginya bisa kita atur
    plugins: {
      legend: {
        position: 'bottom', // Di HP lebih rapi kalau legend di bawah
        labels: {
          boxWidth: 12,
          font: { size: 10 }
        }
      }
    },
    cutout: '70%', // Bikin lubang tengahnya lebih gede biar estetik
  };

  return (
    <div style={{ height: '250px', position: 'relative' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default GrafikDonat;