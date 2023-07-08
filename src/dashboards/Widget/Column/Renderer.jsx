import React, { useContext } from 'react';
import BarChart from '../../../highcharts/BarChart';
import BaseWidget from '../BaseWidget';
import { GetDarkThemeContext } from '../../../DarkThemeProvider';

export default function BarChartWidget({ widgetProps }) {
  const {
    series,
    isLoading,
    categories,
    title,
    subtitle,
    xAxisLabel,
    yAxisLabel,
    legendTitleText,
    tooltipValueSuffix,
  } = widgetProps;

  const { isDarkMode } = useContext(GetDarkThemeContext);

  return (
    <BaseWidget className='bg-white hover:bg-slate-100 cursor-move dark:bg-[#383838]'>
      <div className='contents cursor-default'>
        <BarChart
          title={title}
          subtitle={subtitle}
          xAxisLabel={xAxisLabel}
          xAxisTickStyle={{ fontSize: 12 }}
          yAxisLabel={yAxisLabel}
          legendTitleText={legendTitleText}
          tooltipValueSuffix={tooltipValueSuffix}
          isDarkMode={isDarkMode}
          areTicksRotated={true}
          isLoading={isLoading}
          series={series}
          categories={categories}
        />
      </div>
    </BaseWidget>
  );
}
