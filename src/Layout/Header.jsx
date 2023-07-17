import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import React, { useContext, useMemo } from 'react';
import { ToggleDarkThemeContext } from '../DarkThemeProvider';

const linksRaw = [
  {
    name: 'DashboardPage',
    checkIsCurrentPage: ({ pathname }) => /^\/(home)?$/.test(pathname),
    to: '/',
    text: 'Dashboard',
  },
  {
    name: 'LineChartExample',
    checkIsCurrentPage: ({ pathname }) => /^\/line/.test(pathname),
    to: '/line',
    text: 'Line Chart',
  },
  {
    name: 'BarChartExample',
    checkIsCurrentPage: ({ pathname }) => /^\/bar/.test(pathname),
    to: '/bar',
    text: 'Bar Chart',
  },
  {
    name: 'TestPage',
    checkIsCurrentPage: ({ pathname }) => /^\/tester/.test(pathname),
    to: '/tester',
    text: 'Tester',
  },
];

export default function Header() {
  const { toggleDarkMode } = useContext(ToggleDarkThemeContext);

  const location = useLocation();

  const headerLinks = useMemo(
    () =>
      linksRaw.map(({ checkIsCurrentPage, to, text }) => ({
        isCurrentPage: checkIsCurrentPage({ pathname: location.pathname }),
        to,
        text,
      })),
    [location.pathname]
  );

  return (
    <div className='flex items-center justify-start gap-6 w-full h-10 px-2 bg-blue-300 shadow-md'>
      <button
        type='button'
        onClick={toggleDarkMode}
        className='flex justify-center items-center h-8 border border-black p-1 rounded-lg cursor-pointer text-white bg-red-400 hover:bg-red-500 hover:rounded-xl'
      >
        Switch Theme
      </button>

      <div className='flex items-center justify-between gap-5'>
        {headerLinks.map(({ isCurrentPage, text, to }) => (
          <Link
            key={text}
            to={to}
            style={{ WebkitTextStrokeColor: 'black' }}
            className={clsx(
              'w-auto whitespace-nowrap text-lg my-0 bg-transparent text-white cursor-pointer webkitText-20',
              isCurrentPage ? '!text-[#e8fe6b] !cursor-default link-shadow' : 'hover:text-[#fff2ba] hover:webkitText-0'
            )}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  );
}
