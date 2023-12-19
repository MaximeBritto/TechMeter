import { Bar } from 'react-chartjs-2';
import "../assets/styles/barChart/BarChart.css";

// eslint-disable-next-line react/prop-types
const BarChart = ({technos}) => {
 
  const labels = technos?.map((tech) => tech.techno);
  const data = technos?.map((tech) => parseInt(tech.pourcentage, 10));

  const colors = [
    '#61dafb',
    '#cc0000',
    '#ffd43b',
    '#1046d4',
    '#06b6d4',
    '#7ad752',
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
        title: {
          display: true,
          text: 'Technologies',
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='container-barChart'>
      <h2>Technologies Pourcentage</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
