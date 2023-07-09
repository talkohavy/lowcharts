import 'react-grid-layout/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import Header from './Layout/Header';

function App() {
  return (
    <div className='h-full dark:bg-[#1d1d1d] dark:text-white'>
      <Header />

      <Routes>
        <Route path='index.html' element={<DashboardPage />} />
        <Route path='/' element={<DashboardPage />} />

        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
