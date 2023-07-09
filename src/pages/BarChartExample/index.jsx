import React, { useContext } from 'react';
import BarChart from '@src/highcharts/BarChart';
import { GetDarkThemeContext } from '../../DarkThemeProvider';

export default function LineChartExample() {
  const { isDarkMode } = useContext(GetDarkThemeContext);

  return (
    <div className='flex flex-col items-center justify-start p-5'>
      <div className='w-4xl h-2xl rounded-lg'>
        <BarChart
          title='Amazing Bar Chart'
          subtitle='All the important data you need'
          xAxisLabel='States'
          yAxisLabel='Money Spent [$]'
          legendTitleText='Legend:'
          series={[{ data: [10, 3, 2, 7, 4, 5, 9] }]}
          categories={['New York', 'California', 'Texas', 'Florida', 'Ohio', 'Hawaii', 'Virginia']}
          colorful={true}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}
