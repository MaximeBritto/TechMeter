import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../assets/styles/barChart/BarChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);

/**
 * BarChart component avec en paramétre une liste de données.
 * @param {datas} param0 
 * @returns un graphique en barre avec les données en pourcentage.
 */
// eslint-disable-next-line react/prop-types
const BarChart = ({ datas }) => {
  // eslint-disable-next-line react/prop-types
  const labels = datas?.map((tech) => tech.techno);
  // eslint-disable-next-line react/prop-types
  const data = datas?.map((tech) => parseInt(tech.pourcentage, 10));

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
        borderRadius: "16",

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
          display: false,
          text: 'Technologies',
        },
        ticks: {
          color: 'white',
          font: {
            size: 16,
          }
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{width: "60%"}} className='container-barChart'>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
