import { deepMerge } from '../../utils';
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
  horizontalLines,
  verticalLines,
  animationDuration,
  lineWidth,
}) =>
  deepMerge(
    getGlobalOptions({
      title,
      titleStyle,
      subtitle,
      subtitleStyle,
      legendTitleText,
      onPointClick,
      captionText,
      animationDuration,
    }),
    {
      chart: {
        type: 'line',
        events: {
          // load() { const chart = this; },
          // redraw() {},
          // render() { const chart = this; },
          beforePrint: function () {
            this.resetParams = [this.chartWidth, this.chartHeight, false];
            this.setSize(600, 400, false);
          },
          afterPrint: function () {
            this.setSize.apply(this, this.resetParams);
          },
          // click: function (e) { const point = { x: e.xAxis[0].value, y: e.yAxis[0].value }; },
          // fullscreenOpen: function () {},
          // fullscreenClose: function () {},
        },
      },
      xAxis: {
        title: { text: xAxisLabel, style: { ...DEFAULTS.xAxisLabelStyle, ...xAxisLabelStyle } },
        min: setMinX,
        labels: { style: { ...DEFAULTS.xAxisTickStyle, ...xAxisTickStyle }, rotation: areTicksRotated ? -45 : 0 },
        gridLineWidth: 1,
        minorGridLineWidth: 0,
        minorTickInterval: 'auto',
        minorTickLength: 5,
        minorTickWidth: 1,
        minorTickColor: '#ddd',
        plotLines: verticalLines?.map((line) => ({ ...DEFAULTS.plotLine, ...line })),
        events: {
          // afterSetExtremes() { const chart = this.chart; },
        },
      },
      yAxis: {
        title: { text: yAxisLabel, style: { ...DEFAULTS.yAxisLabelStyle, ...yAxisLabelStyle } },
        labels: { style: { ...DEFAULTS.yAxisTickStyle, ...yAxisTickStyle } },
        min: setMinY,
        minorTicks: true,
        minorGridLineWidth: 0,
        minorTickInterval: 'auto',
        minorTickLength: 5,
        minorTickWidth: 1,
        minorTickColor: '#ddd',
        plotLines: horizontalLines?.map((line) => ({ ...DEFAULTS.plotLine, ...line })),
      },
      tooltip: {
        animation: false,
        backgroundColor: '#333',
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 15,
        valueSuffix: tooltipValueSuffix,
        style: { color: 'white' },
        formatter() {
          const header = this.series.name?.trim()
            ? `<strong style="color:${
                this.series.options?.lineColor ?? this.series.chart.options.colors[this.series.colorIndex]
              }">${this.series.name}</strong><br /><br />`
            : null;
          const body = [
            `<strong style="color:${
              this.series.options?.lineColor ?? this.point.options.marker?.fillColor ?? this.color
            }">•</strong>&nbsp`,
            this.point.name?.trim() ? `<span>${this.point.name}:</span>&nbsp;` : null,
            `<strong>${this.y === 0 ? '0' : this.y}</strong>`,
            tooltipValueSuffix ? `<strong>${tooltipValueSuffix}</strong>` : null,
          ];
          return [header, body.filter(Boolean).join('')].filter(Boolean).join('');
        },
      },
      plotOptions: {
        series: { marker: { enabled: true, radius: 5, fillColor: 'black', lineWidth: 1 } },
        line: { lineWidth },
      },
    }
  );
