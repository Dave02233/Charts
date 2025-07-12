import HistoryChart from './components/Chart';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import RadarChart from './components/RadarChart';
import PolarAreaChart from './components/PolarAreaChart';
import DoughnutChart from './components/DoughnutChart';
import ScatterChart from './components/ScatterChart';

const sample = [
  { ts: '2025-01-01 08:00', value: 120 },
  { ts: '2025-01-01 14:00', value: 125 },
  { ts: '2025-01-01 20:00', value: 130 },
  { ts: '2025-01-02 08:00', value: 110 },
  { ts: '2025-01-02 14:00', value: 115 },
  { ts: '2025-01-02 20:00', value: 118 },
  { ts: '2025-01-03 08:00', value: 145 },
  { ts: '2025-01-03 14:00', value: 140 },
  { ts: '2025-01-03 20:00', value: 138 },
  { ts: '2025-01-04 08:00', value: 100 },
  { ts: '2025-01-04 14:00', value: 105 },
  { ts: '2025-01-04 20:00', value: 110 },
  { ts: '2025-01-05 08:00', value: 20 },
  { ts: '2025-01-05 14:00', value: 25 },
  { ts: '2025-01-05 20:00', value: 30 },
  { ts: '2025-01-06 08:00', value: 150 },
  { ts: '2025-01-06 14:00', value: 155 },
  { ts: '2025-01-06 20:00', value: 160 },
  { ts: '2025-01-07 08:00', value: 130 },
  { ts: '2025-01-07 14:00', value: 135 },
  { ts: '2025-01-07 20:00', value: 140 },
  { ts: '2025-01-08 08:00', value: 140 },
  { ts: '2025-01-08 14:00', value: 145 },
  { ts: '2025-01-08 20:00', value: 150 },
  { ts: '2025-01-09 08:00', value: 125 },
  { ts: '2025-01-09 14:00', value: 130 },
  { ts: '2025-01-09 20:00', value: 135 },
  { ts: '2025-01-10 08:00', value: 135 },
  { ts: '2025-01-10 14:00', value: 140 },
  { ts: '2025-01-10 20:00', value: 145 },
  { ts: '2025-01-11 08:00', value: 90 },
  { ts: '2025-01-11 14:00', value: 95 },
  { ts: '2025-01-11 20:00', value: 100 },
  { ts: '2025-01-12 08:00', value: 160 },
  { ts: '2025-01-12 14:00', value: 165 },
  { ts: '2025-01-12 20:00', value: 170 },
  { ts: '2025-01-13 08:00', value: 80 },
  { ts: '2025-01-13 14:00', value: 85 },
  { ts: '2025-01-13 20:00', value: 90 },
  { ts: '2025-01-14 08:00', value: 170 },
  { ts: '2025-01-14 14:00', value: 175 },
  { ts: '2025-01-14 20:00', value: 180 },
  { ts: '2025-01-15 08:00', value: 185 },
  { ts: '2025-01-15 14:00', value: 190 },
  { ts: '2025-01-15 20:00', value: 195 },
  { ts: '2025-01-16 08:00', value: 155 },
  { ts: '2025-01-16 14:00', value: 160 },
  { ts: '2025-01-16 20:00', value: 165 },
  // …altri punti con orario
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard Grafici</div>
      <div className="charts-grid">
        <div className="chart-card">
          <h2>History Chart</h2>
          <HistoryChart rawData={sample} />
        </div>
        <div className="chart-card">
          <h2>Line Chart</h2>
          <LineChart />
        </div>
        <div className="chart-card">
          <h2>Bar Chart</h2>
          <BarChart />
        </div>
        <div className="chart-card">
          <h2>Pie Chart</h2>
          <PieChart />
        </div>
        <div className="chart-card">
          <h2>Radar Chart</h2>
          <RadarChart />
        </div>
        <div className="chart-card">
          <h2>Polar Area Chart</h2>
          <PolarAreaChart />
        </div>
        <div className="chart-card">
          <h2>Doughnut Chart</h2>
          <DoughnutChart />
        </div>
        <div className="chart-card">
          <h2>Scatter Chart</h2>
          <ScatterChart />
        </div>
      </div>
    </div>
  );
}
