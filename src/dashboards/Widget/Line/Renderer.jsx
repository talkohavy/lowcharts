import React from 'react';
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

  const isDarkMode = false;

  return (
    <BaseWidget className='bg-white hover:bg-slate-100 cursor-move'>
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
          // captionText='<b>The caption renders at the bottom of the chart, and is included if the chart is exported.</b><br><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>'
          // setMinX={0}
          // setMinY={0}
          // colorful={true}
          isLoading={isLoading}
          series={series}
          addHorizontalLines={addHorizontalLines}
          addVerticalLines={addVerticalLines}
        />
      </div>
    </BaseWidget>
  );
}
