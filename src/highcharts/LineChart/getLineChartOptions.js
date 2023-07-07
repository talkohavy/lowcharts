import { deepMerge } from '../../utils';
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
      // Part 1: chart
      chart: {
        type: 'line', // fallback chart type. options are: line column bar spline scatter area areaspline
        events: {
          load() {
            // IMPORTANT NOTE: load is called when the component has loaded and NOT when the animation has finished!
            //   const chart = this;
            //   console.log('chart loaded! chart is:', chart);
            // createDynamicLabel({ chart: this, textContent: 'load event', y: 100 });
          },
          redraw() {
            // createDynamicLabel({ chart: this, textContent: 'redraw event', backgroundColor: 'green', y: 160 });
          },
          render() {
            // createDynamicLabel({ chart: this, textContent: 'render event', backgroundColor: 'blue', y: 220 });
            //   const chart = this;
            //   const resetZoomButton = chart.resetZoomButton;
            //   const padding = 5;
            //   if (resetZoomButton) {
            //     chart.title.translate(-chart.title.getBBox().width / 2 - padding, 0);
            //     resetZoomButton.translate(chart.plotWidth / 2 + resetZoomButton.getBBox().width / 2 + padding, 0);
            //   }
          },
          beforePrint: function () {
            // NOTE! only works when using 'highcharts/modules/exporting'
            this.resetParams = [this.chartWidth, this.chartHeight, false];
            this.setSize(600, 400, false);
          },
          afterPrint: function () {
            // NOTE! only works when using 'highcharts/modules/exporting'
            this.setSize.apply(this, this.resetParams);
          },
          // click: function (e) {
          //   // NOTE! a click on the reset zoom button is also considered a click!
          //   // const point = { x: e.xAxis[0].value, y: e.yAxis[0].value };
          //   // console.log('chart background clicked! point of click is:', point);
          // },
          fullscreenOpen: function () {
            // NOTE! only works when using 'highcharts/modules/exporting'
            // This example makes the title font larger on fullscreen
            // this.update({ title: { style: { fontSize: '48px' } }, subtitle: { style: { color: 'red' } } });
          },
          fullscreenClose: function () {
            // NOTE! only works when using 'highcharts/modules/exporting'
            // This example restores title styling to its default
            // this.update({ title: { style: { ...DEFAULTS.titleStyle, ...titleStyle } } });
          },
        },
      },
      // Part 5: x axis
      xAxis: {
        // DON'T USE CATEGORIES FOR LINE CHART!!! Use the 2D array within your data. Weird shit starts to happen!
        // categories: [1, 2, 3, 4, 5, 6, 7],
        title: {
          // enabled: false, // default value is true. set it to false to make it invisible.
          text: xAxisLabel,
          style: { ...DEFAULTS.xAxisLabelStyle, ...xAxisLabelStyle },
        },
        // type: 'logarithmic', // defaults to linear. Options are: linear, logarithmic, datetime, category or treegrid.
        // startOnTick: true, // Evil! This property conflicts with panning! defaults to fales. Whether to force the axis to start on a tick. Use this option with the minPadding option to control the axis start.
        // endOnTick: true, // Evil! This property conflicts with panning! Whether to force the axis to end on a tick. Use this option with the maxPadding option to control the axis end.
        // minPadding: 0, // default value is 0.01. test this along with an xAxis that looks like this: [1.1,2,3,4,5,6] and you'll understand.
        // maxPadding: 0.05, // default value is 0.01. test this along with an xAxis that looks like this: [1.1,2,3,4,5,6] and you'll understand.
        min: setMinX,
        labels: {
          style: { ...DEFAULTS.xAxisTickStyle, ...xAxisTickStyle },
          rotation: areTicksRotated ? -45 : 0,
        },
        gridLineWidth: 1, // by default, xAxis grid lines are set to 0 (invisible).
        minorGridLineWidth: 0, // by default, minor grid line are invisible (set to 0).
        minorTickInterval: 'auto', // options are: 'auto', some number (i.e. 0.1 or 5)
        minorTickLength: 5,
        minorTickWidth: 1,
        minorTickColor: '#ddd',
        plotLines: verticalLines?.map((line) => ({ ...DEFAULTS.plotLine, ...line })),
        // [
        //   // xAxis.plotLines help you create vertical lines parallel to the yAxis.
        //   {
        //     value: 5, // the y value. A required property!
        //     width: 2, // the line's width. defaults to 1.
        //     color: 'blue', // the line's color. defaults to dark gray-ish.
        //     zIndex: 1, // so that the plotted line would appear in-front of the grid line! Without this, it would appear behind it.
        //     dashStyle: 'longdash', // Defaults to Solid. Options are: 'Dash' | 'DashDot' | 'Dot' | 'LongDash' | 'LongDashDot' | 'LongDashDotDot' | 'ShortDash' | 'ShortDashDot' | 'ShortDashDotDot' | 'ShortDot' | 'Solid'.
        //   },
        // ],
        // gridLineColor: 'black',
        // gridLineDashStyle: 'longdash', // by default, lineStyle is solid, but you can set it to dashes with this property.
        events: {
          afterSetExtremes() {
            // console.log('afterSetExtremes event');
            // const chart = this.chart;
            // console.log('chart is:', chart);
            // const resetZoomButton = chart.resetZoomButton;
            // const padding = 5;
            // if (resetZoomButton) {
            //   chart.title.translate(-chart.title.getBBox().width / 2 - padding, 0);
            //   resetZoomButton.translate(chart.plotWidth / 2 + resetZoomButton.getBBox().width / 2 + padding, 0);
            // } else {
            //   chart.title.translate(chart.title.getBBox().width / 2 + chart.title.translateX, 0);
            // }
          },
        },
      },
      // Part 6: y axis
      yAxis: {
        title: {
          // enabled: false, // enabled: false, // default value is true. set it to false to make it invisible.
          text: yAxisLabel,
          style: { ...DEFAULTS.yAxisLabelStyle, ...yAxisLabelStyle },
        },
        labels: { style: { ...DEFAULTS.yAxisTickStyle, ...yAxisTickStyle } },
        min: setMinY,
        minorTicks: true,
        minorGridLineWidth: 0, // by default, minor grid line are invisible (set to 0).
        minorTickInterval: 'auto', // options are: 'auto', some number (i.e. 0.1 or 5)
        minorTickLength: 5,
        minorTickWidth: 1,
        minorTickColor: '#ddd',
        plotLines: horizontalLines?.map((line) => ({ ...DEFAULTS.plotLine, ...line })),
        // type: 'logarithmic', // defaults to linear. Options are: linear, logarithmic, datetime, category or treegrid.
        // [
        //   // yAxis.plotLines help you create horizontal lines parallel to the xAxis.
        //   {
        //     value: 0, // the y value. A required property!
        //     width: 2, // the line's width. defaults to 1.
        //     color: '#e1e1e1', // the line's color. defaults to dark gray-ish.
        //     zIndex: 1, // so that the plotted line would appear in-front of the grid line! Without this, it would appear behind it.
        //     // dashStyle: 'longdash', // Defaults to Solid. Options are: 'Dash' | 'DashDot' | 'Dot' | 'LongDash' | 'LongDashDot' | 'LongDashDotDot' | 'ShortDash' | 'ShortDashDot' | 'ShortDashDotDot' | 'ShortDot' | 'Solid'.
        //   },
        // ],
        // gridLineWidth: 1, // by default, yAxis grid lines are set to 1.
        // gridLineColor: 'black',
        // gridLineDashStyle: 'longdash', // by default, lineStyle is solid, but you can set it to dashes with this property.
      },
      // Part 9: the tooltip
      tooltip: {
        animation: false, // default value is true. This reflects the movement transition of the tooltip from one point to another.
        backgroundColor: '#333', // default value is somewhat light grayish. this one looks good: '#333'.
        borderColor: '#e1e1e1', // default value is somewhat blackish.
        borderWidth: 1, // default value is 1.
        borderRadius: 15, // default value is 5. My favorite values are: 10 15 20.
        valueSuffix: tooltipValueSuffix, // Example: 'cm'. defaults to an empty string. A suffix that will be added to the y value.
        style: { color: 'white' }, // text color, this one goes well with the above background: white
        // shared: true, // default value is false. if 2 or more series share the same x value, their tooltip can be shared, meaning that all y values would appear as a list inside 1 sahred tooltip.
        // followPointer: false, // default value is false. If true, the tooltip will follow your mouse pointer smoothly. If false, the tooltip would be stationary above each data point.
        /**
         * Formatter Case 1: shared is set to false
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
        //  formatter() {
        // Case 1: shared is set to false
        //   // Case 2: shared is set to true
        //   let s = `<em style="color:yellow">X value:</em> <strong>${this.x}</strong>`;
        //   this.points.forEach((point) => {
        //     s += `<br>• Y is: <strong>${point.y}</strong> - ${point.series.name}`;
        //   });
        //   return s;
        // },
        formatter() {
          // My manual settings:
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
          // The default settings does this:
          // const header = this.point.name
          //   ? `<span style='font-size:10px;'>${this.point.name}</span><br />`
          //   : null;
          // const body = [
          //   `<strong style="color:${this.color}">•</strong>&nbsp`,
          //   this.series.name ? `<span>${this.series.name}:</span>&nbsp;` : null,
          //   `<strong>${this.y === 0 ? '0' : this.y}</strong>`,
          //   tooltipValueSuffix ? `<strong>${tooltipValueSuffix}</strong>` : null,
          // ];
          return [header, body.filter(Boolean).join('')].filter(Boolean).join('');
        },
      },
      // Part 11: plotOptions
      plotOptions: {
        series: {
          // The marker option here is weaker than the marker option of each data point declared within a series.
          marker: {
            enabled: true, // default value is true. if set to false, there would be no points on the line.
            radius: 5, // default value is 5. Sets the radius of the marker's fill.
            fillColor: 'black',
            lineWidth: 1, // the line surrounding the marker
            // lineColor: 'black', // do not use color here! color styles should only exist in themes
          },
          /**
           * Zones gives you the ability to color THE LINE based on y value ranges of your data.
           * The zones option here is weaker the the zones option under plotOptions.series.zones, which is more specific.
           */
          // zones: [
          //   {
          //     value: 0,
          //     color: '#f7a35c',
          //   },
          //   {
          //     value: 4,
          //     color: '#7cb5ec',
          //   },
          //   {
          //     color: '#90ed7d',
          //   },
          // ],
        },
        line: {
          // color: 'green', // A generic color of dot if color is not provided on the series.
          // lineColor: 'yellow', // A generic color of line if lineColor is not provided on the series. I'm not using it though, because i want the fallback to be the colors array.
          lineWidth,
        },
      },
      // Part 12: series - the data to plot
      // series: [
      //   {
      //     type: 'line', // type should always be `line` in LineChart. Other options are: spline scatter area areaspline.
      //     name: 'Taxi Drivers', // The nickname of the plotted line. This name is what the user would see inside the legend. Defaults is `Series ${arrIndex+1}`.
      //     // negativeColor: 'red', // This prop gives you a way to highlight negative data. default value is currentColor.
      //     /**
      //      * Case 1: have an array of objects that each object contains {x,y,name,color,marker}.
      //      * - x: the x value
      //      * - y: the y value
      //      * - name: the name that would appear inside the tootip (optional)
      //      * - color: the color of the bullet that would appear inside the tootip (optional). Defaults to the color of the line itself.
      //      * - marker: a way to override a data point's size and color (optional)
      //      */
      //     //
      //     data: [
      //       { name: 'Jack', x: 1, y: 4 },
      //       { name: 'Mark', x: 2, y: 2 },
      //       { name: 'Dilen', x: 3, y: 0 },
      //       { name: 'Bob', x: 4, y: -2 },
      //       { name: 'Sonia', x: 5, y: -3 },
      //       {
      //         name: 'Jane',
      //         x: 6,
      //         y: -4,
      //         color: 'red', // the color of the bullet that would appear inside the tooltip.
      //         marker: {
      //           enabled: true,
      //           radius: 15,
      //           // lineWidth: 15,
      //           lineColor: 'black',
      //           fillColor: 'red',
      //         },
      //       },
      //       { name: 'empty', x: 7 },
      //     ],
      //     // step: 'center', // defaults to undefined. if you need a graph that looks like a step function, add this property with either 'left', 'right' or 'center', depending on what you need it to look like.
      //     // Case 2: have the data be represented by a 2D array.
      //     //   data: [
      //     //     [1, 9],
      //     //     [2, 7],
      //     //     [3, 5],
      //     //     [4, 3],
      //     //     [5, 2],
      //     //     [6, 1],
      //     //   ],
      //   },
      //   // Case 3: have 2 or more serieses
      //   //   {
      //   //     type: 'line',
      //   //     name: 'John', // default value is `Series ${arrIndex+1}`
      //   //     data: [1, 2, 1, 4, 3, 6],
      //   //   },
      //   //   {
      //   //     type: 'line',
      //   //     name: 'Dana',
      //   //     data: [6, 3, 4, 1, 2, 1],
      //   //   },
      //   //   {
      //   //     type: 'line',
      //   //     name: 'Shalom',
      //   //     data: [1, 2, 4, 3, 0, 2, 8],
      //   //   },
      //   //   {
      //   //     type: 'line',
      //   //     name: 'Keren',
      //   //     data: [9, 7, 5, 3, 2, 1],
      //   //   },
      //   //   {
      //   //     type: 'spline',
      //   //     name: 'John', // default value is `Series ${arrIndex+1}`
      //   //     data: [-4, -8, 0, 4, 5, 6, 9, 10, 12, 15, 10, 9, 7, -4],
      //   //     // Zones gives you the ability to color the graph based on y value ranges:
      //   //     zones: [
      //   //       {
      //   //         value: 0,
      //   //         color: '#f7a35c',
      //   //       },
      //   //       {
      //   //         value: 4,
      //   //         color: '#7cb5ec',
      //   //       },
      //   //       {
      //   //         color: '#90ed7d',
      //   //       },
      //   //     ],
      //   //   },
      // ],
    }
  );
