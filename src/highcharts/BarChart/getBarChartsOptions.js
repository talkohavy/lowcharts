import { deepMerge } from '../../utils/index';
import { GLOBAL_CHART_DEFAULT_THEME as DEFAULTS, getGlobalOptions } from '../getGlobalOptions';

/**
 * Configuration options for the series are given in three levels:
 * 1. Options for all series in a chart are defined in the plotOptions.series object.
 * 2. Options for all column series are defined in plotOptions.column.
 * 3. Options for one single series are given in the series instance array.
 */
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
      // Part 1: chart
      chart: {
        type: 'column', // fallback chart type. options are: line column bar spline scatter area areaspline
        events: {
          // load() {
          //   // IMPORTANT NOTE: load is called when the component has loaded and NOT when the animation has finished!
          //   const chart = this;
          //   console.log('chart loaded! chart is:', chart);
          // },
          // render() {
          //   const chart = this;
          //   const resetZoomButton = chart.resetZoomButton;
          //   const padding = 5;
          //   if (resetZoomButton) {
          //     chart.title.translate(-chart.title.getBBox().width / 2 - padding, 0);
          //     resetZoomButton.translate(chart.plotWidth / 2 + resetZoomButton.getBBox().width / 2 + padding, 0);
          //   }
          // },
          beforePrint: function () {
            // NOTE! only works when using 'highcharts/modules/exporting'
            this.resetParams = [this.chartWidth, this.chartHeight, false];
            this.setSize(600, 400, false);
          },
          afterPrint: function () {
            // NOTE! only works when using 'highcharts/modules/exporting'
            this.setSize.apply(this, this.resetParams);
          },
          click: function (e) {
            e;
            // const point = { x: e.xAxis[0].value, y: e.yAxis[0].value };
            // console.log('chart background clicked! point of click is:', point);
          },
          drilldown: function (e) {
            if (!e.seriesOptions) {
              const chart = this;
              const drilldowns = {
                  Animals: {
                    name: 'Animals',
                    data: [
                      ['Cows', 2],
                      ['Sheep', 3],
                    ],
                  },
                  Fruits: {
                    name: 'Fruits',
                    data: [
                      ['Apples', 5],
                      ['Oranges', 7],
                      ['Bananas', 2],
                    ],
                  },
                  Cars: {
                    name: 'Cars',
                    data: [
                      ['Toyota', 1],
                      ['Volkswagen', 2],
                      ['Opel', 5],
                    ],
                  },
                },
                series = drilldowns[e.point.name];

              // Show the loading label
              chart.showLoading('Simulating Ajax ...');

              setTimeout(function () {
                chart.hideLoading();
                chart.addSeriesAsDrilldown(e.point, series);
              }, 1000);
            }
          },
        },
      },
      // Part 5: x axis
      xAxis: {
        // maxRange: 1,
        // type: 'datetime', // Options are: category, datetime
        tickWidth: 1,
        tickLength: 10,
        tickColor: '#ddd',
        startOfWeek: 0, // Defaults to 1. For datetime axes, this decides where to put the tick between weeks. 0 = Sunday, 1 = Monday.
        tickmarkPlacement: 'on', // Defaults to between. For categorized axes only. If on the tick mark is placed in the center of the category, if between the tick mark is placed between categories. The default is between if the tickInterval is 1, else on.
        categories,
        title: {
          // enabled: false, // default value is true. set it to false to make it invisible.
          text: xAxisLabel,
          style: { ...DEFAULTS.xAxisLabelStyle, ...xAxisLabelStyle },
        },
        labels: {
          /**
           * Supported format keys:
           * %a: Short weekday, like 'Mon'
           * %A: Long weekday, like 'Monday'
           * %d: Two digit day of the month, 01 to 31
           * %e: Day of the month, 1 through 31
           * %w: Day of the week, 0 through 6
           * %b: Short month, like 'Jan'
           * %B: Long month, like 'January'
           * %m: Two digit month number, 01 through 12
           * %y: Two digits year, like 09 for 2009
           * %Y: Four digits year, like 2009
           * %H: Two digits hours in 24h format, 00 through 23
           * %k: Hours in 24h format, 0 through 23
           * %I: Two digits hours in 12h format, 00 through 11
           * %l: Hours in 12h format, 1 through 12
           * %M: Two digits minutes, 00 through 59
           * %p: Upper case AM or PM
           * %P: Lower case AM or PM
           * %S: Two digits seconds, 00 through 59
           * %L: Milliseconds (naming from Ruby)
           */
          format: '{value:%d.%m.%Y}',
          style: { ...DEFAULTS.xAxisTickStyle, ...xAxisTickStyle },
          rotation: areTicksRotated ? -45 : 0,
        },
        min: setMinX,
        // opposite: true, // Defaults to false. Whether to display the axis on the opposite side of the normal. The normal is on the left side for vertical axes and bottom for horizontal, so the opposite sides will be right and top respectively. This is typically used with dual or multiple axes.
        // reversed: true, // Defaults to undefined. Whether to reverse the axis so that the highest number is closest to the origin. If the chart is inverted, the x axis is reversed by default.
        // reversedStacks: true, // Defaults to false. This option determines how stacks should be ordered within a group. For example reversed xAxis also reverses stacks, so first series comes last in a group. To keep order like for non-reversed xAxis enable this option.
        // tickInterval: 1 * 24 * 3600 * 1000, // 1 day
        // gridLineColor: 'black',
        // gridLineDashStyle: 'longdash', // by default, lineStyle is solid, but you can set it to dashes with this property.
        // minorGridLineWidth: 0, // by default, minor grid line are invisible (set to 0).
      },
      // Part 6: y axis
      yAxis: {
        title: {
          // enabled: false, // enabled: false, // default value is true. set it to false to make it invisible.
          text: yAxisLabel,
          style: { ...DEFAULTS.yAxisLabelStyle, ...yAxisLabelStyle },
        },
        labels: { style: { ...DEFAULTS.yAxisTickStyle, ...yAxisTickStyle } },
        min: setMinY, // The minimum value of the axis. If null the min value is automatically calculated.
        // stackLabels: {
        //   enabled: true,
        //   style: {
        //     fontWeight: 'bold',
        //     color:
        //       // theme
        //       (Highcharts.defaultOptions.title.style &&
        //         Highcharts.defaultOptions.title.style.color) ||
        //       'gray',
        //     textOutline: 'none',
        //   },
        // },
      },
      tooltip: {
        animation: false, // default value is true. This reflects the movement transition of the tooltip from one point to another.
        backgroundColor: '#333', // default value is somewhat light grayish.
        borderColor: '#e1e1e1', // default value is somewhat blackish.
        borderWidth: 1, // default value is 1.
        borderRadius: 15, // default value is 5. My favorite values are: 10 15 20.
        style: { color: 'white' },
        valueSuffix: tooltipValueSuffix, // Example: 'cm'. defaults to an empty string. A suffix that will be added to the y value.
        // shared: false, // default value is false. if 2 or more series share the same x value, their tooltip can be shared, meaning that all y values would appear as a list inside 1 sahred tooltip.
        // followPointer: false, // default value is false. If true, the tooltip will follow your mouse pointer smoothly. If false, the tooltip would be stationary above each data point.
        // formatter() {
        //   // Case 1: shared is set to false
        /**
         * properties available on the `this` object:
         * - x
         * - y
         * - color
         * - colorIndex
         * - percentage
         * - point: { category, selected, }
         * - series
         * - total
         */
        //   // return `<em style="color:yellow">X value:</em> <strong>${this.x}</strong>, <em style="color:yellow">Y value:</em> <strong>${this.y}</strong>`;
        //   // Case 2: shared is set to true
        //   let s = `<em style="color:yellow">X value:</em> <strong>${this.x}</strong>`;
        //   this.points.forEach((point) => {
        //     s += `<br>• Y is: <strong>${point.y}</strong> - ${point.series.name}`;
        //   });
        //   return s;
        // },
      },
      // Part 12: plotOptions
      plotOptions: {
        series: { centerInCategory: true },
        column: {
          pointWidth: columnWidth,
          // shared options for all column series
          stacking: 'normal', // Defaults to undefined. Possible options are: undefined, 'normal', 'percent'.
          colorByPoint: colorful, // Defaults to false. When using automatic point colors pulled from the global colors or series-specific plotOptions.column.colors collections, this option determines whether the chart should receive one color per series or one color per point.
          // allowPointSelect: true, // Defaults to false. Allow this series' points to be selected by clicking on the graphic (columns, point markers, pie slices, map areas etc). The selected points can be handled by point select and unselect events, or collectively by the getSelectedPoints function. And alternative way of selecting points is through dragging.
          dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            format: `${barLabelPrefix}{point.y:.1f}${barLabelSuffix}`, // one decimal
            style: { fontSize: '13px', fontFamily: 'Verdana, sans-serif' },
            // align: 'right',
            // y: 0, // defaults to 0. put 10 pixels to push down from the top
          },
        },
      },
      // Part 13: series - the data to plot
      // series: [
      //   {
      //     // specific options for this series instance
      //     name: 'Example',
      //     type: 'column',
      //     data: [3, 5, 1, 13],
      //   },
      //   {
      //     name: 'BPL',
      //     data: [3, 5, 1, 13],
      //   },
      //   {
      //     name: 'FA Cup',
      //     data: [14, 8, 8, 12],
      //   },
      //   {
      //     name: 'CL',
      //     data: [0, 2, 6, 3],
      //   },
      // ],
      // drilldown: {
      //   series: [],
      // },
    }
  );
