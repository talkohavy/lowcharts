import Highcharts from 'highcharts';
// @ts-ignore
import HighchartsReact from 'highcharts-react-official';
import HighchartsExporting from 'highcharts/modules/exporting';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { deepMerge, wrapInDebounce } from '../../utils';
import { HIGHCHARTS_THEMES } from '../themes';
import { resetZoom, setZoom } from '../functionHelpers';
import { getOptions } from './getLineChartOptions';

if (typeof Highcharts === 'object') HighchartsExporting(Highcharts);

/** @param { import('../types/index').LineChartProps } props The props that make up the LineChart */
function LineChart(
  {
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
    borderRadius,
  },
  ref
) {
  // all useRefs:
  const chartRef = useRef(null);

  // all useImperativeHandles:
  useImperativeHandle(ref, () => ({
    setZoom: ({ xMinValue, xMaxValue }) =>
      setZoom({ chart: chartRef.current.chart, xMinValue: parseInt(xMinValue), xMaxValue: parseInt(xMaxValue) }),
    resetZoom: () => resetZoom(chartRef.current.chart),
  }));

  // all useEffects:
  useEffect(() => {
    if (chartRef.current) {
      const observer = new ResizeObserver(wrapInDebounce(() => chartRef.current.chart.reflow(), 40));
      observer.observe(chartRef.current.container.current);
      return () => observer.disconnect();
    }
  }, []);

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
    <HighchartsReact
      ref={chartRef}
      highcharts={Highcharts}
      options={optionsWithSeries}
      constructorType='chart'
      allowChartUpdate={true}
      immutable={false}
      containerProps={{ style: { width: '100%', height: '100%', borderRadius } }}
    />
  );
}

const ForwardedLineChart = forwardRef(LineChart);

export default ForwardedLineChart;
