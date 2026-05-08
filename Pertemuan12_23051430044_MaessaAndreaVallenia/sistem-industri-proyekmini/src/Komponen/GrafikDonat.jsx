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
      },
    ],
  };

  return (
    <div>
      <h6 className="text-center">Proporsi Defect</h6>
      <Doughnut data={data} />
    </div>
  );
}

export default GrafikDonat;