import 'react-grid-layout/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Header from './Layout/Header';
import LineChartExample from './pages/LineChartExample';
import BarChartExample from './pages/BarChartExample';

function App() {
  return (
    <div className='h-full dark:bg-[#1d1d1d] dark:text-white'>
      <Header />

      <Routes>
        <Route path='index.html' element={<DashboardPage />} />
        <Route path='/home' element={<DashboardPage />} />
        <Route path='/' element={<DashboardPage />} />
        <Route path='/line' element={<LineChartExample />} />
        <Route path='/bar' element={<BarChartExample />} />

        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
