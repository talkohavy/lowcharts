import BarChart from './highcharts/BarChart';

function App() {
  return (
    <div>
      <BarChart series={[{ name: 'popu', data: [1, 2, 3, 4, 5, 6] }]} />
    </div>
  );
}

export default App;
