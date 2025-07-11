// src/components/GaugeChart.jsx
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { GaugeController, Needle } from 'chartjs-gauge';
import { Chart } from 'react-chartjs-2';

// Registra i componenti necessari
ChartJS.register(GaugeController, ArcElement, Needle, Tooltip, Legend);

export default function GaugeChart({ value = 70 }) {
  const data = {
    datasets: [
      {
        value,              // valore attuale
        data: [100],        // valore massimo
        backgroundColor: ['#00c49f'],
        borderWidth: 0,
        needle: {
          radiusPercentage: 2,
          widthPercentage: 3.2,
          lengthPercentage: 80,
          color: 'black'
        },
        borderColor: 'white'
      }
    ]
  };

  const options = {
    responsive: true,
    cutout: '80%',
    circumference: 180,
    rotation: 270,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    }
  };

  return (
    <div style={{ width: 300 }}>
      <Chart type='gauge' data={data} options={options} />
    </div>
  );
}
