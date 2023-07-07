import { deepMerge } from '../../utils/index';
import { GLOBAL_CHART_DEFAULT_THEME as DEFAULTS, getGlobalOptions } from '../getGlobalOptions';

export const getOptions = ({
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
  categories,
  colorful,
  barLabelPrefix = '',
  barLabelSuffix = '',
  animationDuration,
  columnWidth,
}) =>
  deepMerge(
    getGlobalOptions({
      title,
      titleStyle,
      subtitle,
      subtitleStyle,
      legendTitleText,
      captionText,
      onPointClick,
      animationDuration,
    }),
    {
      chart: {
        type: 'column',
        events: {
          // load() { const chart = this; },
          // render() { const chart = this; },
          beforePrint: function () {
            this.resetParams = [this.chartWidth, this.chartHeight, false];
            this.setSize(600, 400, false);
          },
          afterPrint: function () {
            this.setSize.apply(this, this.resetParams);
          },
          // click: function (e) {
          //   // const point = { x: e.xAxis[0].value, y: e.yAxis[0].value };
          // },
          // drilldown: function (e) {
          //   if (!e.seriesOptions) {
          //     const chart = this;
          //   }
          // },
        },
      },
      xAxis: {
        tickWidth: 1,
        tickLength: 10,
        tickColor: '#ddd',
        startOfWeek: 0,
        tickmarkPlacement: 'on',
        categories,
        title: { text: xAxisLabel, style: { ...DEFAULTS.xAxisLabelStyle, ...xAxisLabelStyle } },
        labels: {
          format: '{value:%d.%m.%Y}',
          style: { ...DEFAULTS.xAxisTickStyle, ...xAxisTickStyle },
          rotation: areTicksRotated ? -45 : 0,
        },
        min: setMinX,
      },
      yAxis: {
        title: { text: yAxisLabel, style: { ...DEFAULTS.yAxisLabelStyle, ...yAxisLabelStyle } },
        labels: { style: { ...DEFAULTS.yAxisTickStyle, ...yAxisTickStyle } },
        min: setMinY,
      },
      tooltip: {
        animation: false,
        backgroundColor: '#333',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 15,
        style: { color: 'white' },
        valueSuffix: tooltipValueSuffix,
      },
      plotOptions: {
        series: { centerInCategory: true },
        column: {
          pointWidth: columnWidth,
          stacking: 'normal',
          colorByPoint: colorful,
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            format: `${barLabelPrefix}{point.y:.1f}${barLabelSuffix}`,
            style: { fontSize: '13px', fontFamily: 'Verdana, sans-serif' },
          },
        },
      },
    }
  );
