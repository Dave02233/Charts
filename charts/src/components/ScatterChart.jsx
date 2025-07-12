import { Chart as ChartJS, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

export default function ScatterChart() {
  const data = {
    datasets: [
      {
        label: 'kW',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 0.5, y: 5.5 },
        ],
        backgroundColor: 'rgb(255, 99, 132)'
      },
    ],
  };
  const options = { responsive: true };
  return <Chart type="scatter" data={data} options={options} />;
}
