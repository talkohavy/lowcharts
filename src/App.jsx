import 'react-grid-layout/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import DashboardPage from './pages/DashboardPage';
import { ToggleDarkThemeContext } from './DarkThemeProvider';

function App() {
  const { toggleDarkMode } = useContext(ToggleDarkThemeContext);

  return (
    <div className='dark:bg-[#1d1d1d] dark:text-white'>
      <button
        type='button'
        onClick={toggleDarkMode}
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
