import 'react-grid-layout/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import DashboardsPage from './pages/DashboardsPage';
import Header from './Layout/Header';
import LineChartExample from './pages/LineChartExample';
import BarChartExample from './pages/BarChartExample';
import TestPage from './pages/TestPage';

function App() {
  return (
    <div className='h-full dark:bg-[#1d1d1d] text-black dark:text-white'>
      <Header />

      <Routes>
        <Route path='index.html' element={<DashboardsPage />} />
        <Route path='/home' element={<DashboardsPage />} />
        <Route path='/' element={<DashboardsPage />} />
        <Route path='/line' element={<LineChartExample />} />
        <Route path='/bar' element={<BarChartExample />} />
        <Route path='/tester' element={<TestPage />} />

        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
