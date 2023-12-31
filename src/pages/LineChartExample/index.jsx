import React, { useContext } from 'react';
import LineChart from '@src/highcharts/LineChart';
import { GetDarkThemeContext } from '../../DarkThemeProvider';

export default function LineChartExample() {
  const { isDarkMode } = useContext(GetDarkThemeContext);

  return (
    <div className='flex flex-col items-center justify-start p-5'>
      <div className='w-4xl h-2xl rounded-lg'>
        <LineChart
          title='Amazing Line Chart'
          subtitle='All the important data you need'
          xAxisLabel='Amount of Liters [ml]'
          yAxisLabel='Days count [#]'
          legendTitleText='The Legend is:'
          series={[{ data: [1, 3, 2, 7, 4, 5, 9] }]}
          lineWidth={2}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}
