import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import React, { useEffect, useMemo, useRef } from 'react';
import { deepMerge, wrapInDebounce } from '../../utils';
import { HIGHCHARTS_THEMES } from '../themes';
import { getOptions } from './getLineChartOptions';

if (typeof Highcharts === 'object') HighchartsExporting(Highcharts);

/** @param { import('../types/index').LineChartProps } props The props that make up the LineChart */
export default function LineChart({
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
  addHorizontalLines = null,
  addVerticalLines = null,
  setMinX = null,
  setMinY = null,
  areTicksRotated = false,
  tooltipValueSuffix = '',
  onPointClick = () => {},
  captionText = '',
  isDarkMode = false,
  isLoading = false,
  series,
  animationDuration = 1000,
  lineWidth,
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
          horizontalLines: addHorizontalLines,
          verticalLines: addVerticalLines,
          setMinX,
          setMinY,
          onPointClick,
          areTicksRotated,
          tooltipValueSuffix,
          captionText,
          animationDuration,
          lineWidth,
        }),
        isDarkMode ? HIGHCHARTS_THEMES.dark : HIGHCHARTS_THEMES.light
      ),
    [
      animationDuration,
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
      addHorizontalLines,
      addVerticalLines,
      lineWidth,
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
        constructorType='chart'
        allowChartUpdate={true}
        immutable={false}
        ref={chartRef}
        containerProps={{ style: { width: '100%', height: '100%' } }}
      />
    </>
  );
}
