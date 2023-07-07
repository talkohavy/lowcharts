import 'react-grid-layout/css/styles.css';
import React, { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import BarChart from './highcharts/BarChart';
import { getIsDarkMode, toggleThemeDarkMode } from './utils/darkMode';
import DashboardPage from './pages/DashboardPage';
import EffectFirst from './EffectFirst';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeDarkThemeEffect = useCallback(() => {
    console.log('shouldBeDark is:', isDarkMode);

    toggleThemeDarkMode({ toDark: isDarkMode });
  }, [isDarkMode]);

  return (
    <div className='dark:bg-[#1d1d1d] dark:text-white'>
      <EffectFirst effect={changeDarkThemeEffect} />
      <button
        type='button'
        onClick={() => setIsDarkMode(!isDarkMode)}
        className='flex justify-center items-center border border-black p-2 rounded-lg cursor-pointer bg-red-400 hover:bg-red-500 hover:rounded-xl'
      >
        Switch Theme
      </button>

      <Routes>
        <Route path='index.html' element={<DashboardPage />} />
        <Route path='/' element={<DashboardPage />} />

        <Route path='*' element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
