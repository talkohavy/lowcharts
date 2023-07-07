import React, { useEffect, useMemo, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldownModule from 'highcharts/modules/drilldown';
import { deepMerge, getArrMaxValue, wrapInDebounce } from '../../utils';
import { HIGHCHARTS_THEMES } from '../themes';
import { getOptions } from './getBarChartsOptions';

drilldownModule(Highcharts);

/** @param { import('../types/index').BarChartProps } props The props that make up the BarChart */
export default function BarChart({
  title = '',
  titleStyle,
  subtitle = '',
  subtitleStyle,
  legendTitleText = undefined,
  xAxisLabel = '',
  xAxisLabelStyle,
  xAxisTickStyle,
  yAxisLabel = '',
  yAxisLabelStyle,
  yAxisTickStyle,
  setMinX = null,
  setMinY = null,
  areTicksRotated = false,
  tooltipValueSuffix = '',
  onPointClick = () => {},
  captionText = '',
  isDarkMode = false,
  colorful = false,
  isLoading = false,
  series = null,
  categories,
  hideCategories = false,
  barLabelPrefix = '',
  barLabelSuffix = '',
  animationDuration = 1000,
  columnWidth,
  customChartHandleRowRenderer,
}) {
  // all useRefs:
  const chartRef = useRef(null);

  // all useEffects:
  useEffect(() => {
    if (chartRef.current) {
      const observer = new ResizeObserver(wrapInDebounce(() => chartRef.current.chart.reflow(), 40));
      observer.observe(chartRef.current.container.current);
      return () => observer.disconnect();
    }
  }, [chartRef.current]);

  // all useMemos:
  const categoriesConverted = useMemo(() => {
    if (categories && !hideCategories) return categories;

    const maxLength = getArrMaxValue({ arr: series, predicate: (item) => item.data.length });

    return Array.from(Array(maxLength)).map(() => '');
  }, [categories, hideCategories]);

  const options = useMemo(
    () =>
      deepMerge(
        getOptions({
          title,
          titleStyle,
          subtitle,
          subtitleStyle,
          legendTitleText,
          xAxisLabel,
          xAxisLabelStyle,
          xAxisTickStyle,
          yAxisLabel,
          yAxisLabelStyle,
          yAxisTickStyle,
          setMinX,
          setMinY,
          onPointClick,
          areTicksRotated,
          tooltipValueSuffix,
          captionText,
          colorful,
          categories: categoriesConverted,
          barLabelPrefix,
          barLabelSuffix,
          animationDuration,
          columnWidth,
        }),
        isDarkMode ? HIGHCHARTS_THEMES.dark : HIGHCHARTS_THEMES.light
      ),
    [
      // Shared Properties:
      title,
      titleStyle,
      subtitle,
      subtitleStyle,
      legendTitleText,
      xAxisLabel,
      xAxisLabelStyle,
      xAxisTickStyle,
      yAxisLabel,
      yAxisLabelStyle,
      yAxisTickStyle,
      setMinX,
      setMinY,
      areTicksRotated,
      tooltipValueSuffix,
      onPointClick,
      captionText,
      isDarkMode,
      isLoading,
      // Unique BarChart properties:
      categoriesConverted,
      colorful,
      barLabelPrefix,
      barLabelSuffix,
    ]
  );

  const optionsWithSeries = useMemo(() => ({ ...options, series }), [series, options]);

  // all useEffects:
  useEffect(() => {
    if (isLoading) {
      chartRef.current.chart.showLoading();
    } else {
      chartRef.current.chart.hideLoading();
    }
  }, [isLoading]);

  //------------------- Render GUI ----------------------
  return (
    <>
      {customChartHandleRowRenderer?.({ chart: chartRef.current?.chart })}

      <HighchartsReact
        highcharts={Highcharts}
        options={optionsWithSeries}
        constructorType='chart' // String for constructor method. Official constructors: 'chart' for Highcharts charts, 'stockChart' for Highstock charts, 'mapChart' for Highmaps charts, 'ganttChart' for Gantt charts.
        allowChartUpdate={true} // This wrapper uses chart.update() method to apply new options to the chart when changing the parent component. This option allow to turn off the updating.
        immutable={false}
        ref={chartRef}
        containerProps={{ style: { width: '100%', height: '100%' } }}
      />
    </>
  );
}
