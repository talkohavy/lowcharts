import React, { useContext } from 'react';
import { GetDarkThemeContext } from '../../../DarkThemeProvider';
import LineChart from '../../../highcharts/LineChart';
import BaseWidget from '../BaseWidget';

export default function LineChartWidget({ widgetProps }) {
  const {
    series,
    isLoading,
    addHorizontalLines,
    addVerticalLines,
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
        <LineChart
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
          addHorizontalLines={addHorizontalLines}
          addVerticalLines={addVerticalLines}
        />
      </div>
    </BaseWidget>
  );
}
