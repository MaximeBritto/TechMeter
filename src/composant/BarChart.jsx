import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const technos = [
    { techno: "Reactjs", pourcentage: "67" },
    { techno: "Ruby on Rails", pourcentage: "18" },
    { techno: "Python", pourcentage: "35" },
    { techno: "SwiftUi", pourcentage: "100" },
    { techno: "Tailwind", pourcentage: "40" },
    { techno: "Nodejs", pourcentage: "80" },
  ];

  const labels = technos.map((tech) => tech.techno);
  const data = technos.map((tech) => parseInt(tech.pourcentage, 10));

  const colors = [
    'rgba(75, 192, 192, 0.4)',
    'rgba(255, 99, 132, 0.4)',
    'rgba(255, 205, 86, 0.4)',
    'rgba(54, 162, 235, 0.4)',
    'rgba(153, 102, 255, 0.4)',
    'rgba(255, 159, 64, 0.4)',
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Pourcentage',
        backgroundColor: colors,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: data,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Technologies Pourcentage</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
