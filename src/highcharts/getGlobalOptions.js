// import { createDynamicLabel } from '../functionHelpers';
// import Highcharts from 'highcharts';
// const COLORS = ['black', '#e4d6a7', '#e9b44c', '#9b2915', '#50a2a7'];

export const GLOBAL_CHART_DEFAULT_THEME = {
  titleStyle: { fontSize: 32, fontWeight: 'bold' },
  subtitleStyle: { fontSize: 18, fontWeight: 'normal' },
  xAxisLabelStyle: { fontSize: 22 },
  xAxisTickStyle: { fontSize: 18, fontFamily: 'Verdana, sans-serif' },
  yAxisLabelStyle: { fontSize: 22 },
  yAxisTickStyle: { fontSize: 18, fontFamily: 'Verdana, sans-serif' },
  loadingStyle: { fontSize: '1.8rem', fontFamily: 'Verdana, sans-serif' },
  plotLine: { width: 2, color: 'blue', zIndex: 1, dashStyle: 'longdash' },
};

/**
 * Configuration options for the series are given in three levels:
 * 1. Options for all series in a chart are defined in the plotOptions.series object.
 * 2. Options for all column series are defined in plotOptions.column.
 * 3. Options for one single series are given in the series instance array.
 */
export const getGlobalOptions = ({
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  legendTitleText,
  onPointClick,
  captionText,
  animationDuration,
}) => ({
  // Part 0: reset stuff
  credits: { enabled: false }, // removes the highcharts.com label at the bottom right. default value is true.
  accessibility: { enabled: false },
  // Part 1: chart
  chart: {
    zoomType: 'xy', // possible types are: x xy y
    panning: true,
    panKey: 'shift',
    plotBorderWidth: 1,
    resetZoomButton: {
      position: {
        align: 'right', // 'right' by default
        verticalAlign: 'top', // 'top' by default
        // x: 420,
        // y: 30,
      },
      // Styling the reset button:
      theme: {
        // width: 100,
        height: 20,
        fill: '#f7f7f7',
        stroke: 'silver',
        r: 8, // border radius
        states: { hover: { fill: '#41739D', style: { color: 'white' } } },
        style: { fontSize: 18, color: 'blue' },
      },
    },
    // styledMode: true, // i'm not using this as i am applying my own custom themes using this chartOptions object.
    // width: 600, // You will never use this! You would always set the chart's width by its wrapping parent. This option needs an explicit number in pixels. By default (when null) the width is calculated from the offset width of the containing element.
  },
  // Part 2: chart title
  title: {
    text: title,
    style: { ...GLOBAL_CHART_DEFAULT_THEME.titleStyle, ...titleStyle },
    // align: 'center', // Defaults to 'center'. The horizontal alignment of the title. Can be one of "left", "center" and "right".
    // margin: 15, // The margin between the title and the plot area, or if a subtitle is present, the margin between the subtitle and the plot area. defaults to 15.
    // x: 0, // default value is 0. positive numbers = go right, negative numbers = go left.
    // y: 0, // default value is NOT 0!!! it is undefined! positive numbers = go down, negative numbers = go up.
    // floating: false, // When the title is floating, the plot area will not move to make space for it. Defaults to false.
  },
  // Part 3: chart subtitle
  subtitle: {
    text: subtitle,
    style: { ...GLOBAL_CHART_DEFAULT_THEME.subtitleStyle, ...subtitleStyle },
    // alignValue: 'center', // The horizontal alignment of the title. Can be one of "left", "center" and "right". Defaults to 'center'.
    // x: 0, // default value is 0. positive numbers = go right, negative numbers = go left.
    // y: 0, // default value is NOT 0!!! it is undefined! positive numbers = go down, negative numbers = go up.
    // floating: false, // When the title is floating, the plot area will not move to make space for it. Defaults to false.
  },
  // Part 4: the loading state
  loading: {
    showDuration: 200, // amount in ms to delay presenting the loading spinner on page load.
    hideDuration: 300, // amount in ms to show the loading spinner AFTER data has been loaded.
    labelStyle: GLOBAL_CHART_DEFAULT_THEME.loadingStyle,
  },
  lang: { loading: 'loading...' },
  // Part 8: the legend
  legend: {
    // enabled: true, // defaults to true. If set to false, legend would NOT appear.
    title: { text: legendTitleText ?? 'Legend:' },
    align: 'center', // Options are: right, left, center. Defaults to center.
    verticalAlign: 'bottom', // Options are: top, bottom. Defaults to bottom.
    layout: 'horizontal', // Decide whether 2 serieses should appear as stacked on one another (vertical), or in a line/row, beside one another (horizontal). Options are: vertical, horizontal, proximate. Defaults to horizontal.
    // borderWidth: 1, // defaults to undefined.
    // borderColor: 'black', // defaults to gray-ish.
    // x: 0, // positive numbers = go right, negative numbers = go left. When align mode isn't center, it pushed the chart.
    // y: -50, // positive numbers = go down, negative numbers = go up.
  },
  // Part 10: the chart's responsiveness rules
  responsive: {
    rules: [
      {
        condition: {
          // We can use: maxWidth maxHeight minWidth minHeight
          maxWidth: 500, // applies for when the chart's width is lower than 500px
          callback() {
            /**
             * This callback is optional! This callback will be called every time there's a change
             * in the property mentioned under `condition`, whether the condition was true or false.
             * Within this callback you can check for certain things and then decide whether you want to apply this condition or not.
             * NOTE! Once you decided to use this callback, it's up to you to return true or false,
             * and the true or false answer returned by the condition is ignored!
             */
            return false;
          },
        },
        chartOptions: {
          legend: { enabled: false },
          yAxis: { title: '' },
        },
      },
    ],
  },
  // The chart's caption, which will render below the chart and will be part of exported charts. The caption can be updated after chart initialization through the Chart.update or Chart.caption.update methods.
  caption: {
    text: captionText, // Example: '<b>The caption renders at the bottom of the chart, and is included if the chart is exported.</b><br><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em>', // defaults to an empty string. Can accept html tags.
    // margin: 15, // Defaults to 15. The margin between the caption and the plot area.
    // align: 'center', // defaults to 'left'.
    // style: { color: '#666666' }, // defaults to { color: '#666666' }.
  },
  // Part 11: plotOptions
  plotOptions: {
    series: {
      animation: { duration: animationDuration }, // I couldn't find what the dafault is, but i think it's 1000ms.
      events: {
        afterAnimate: function () {
          // console.log('animation finished!');
        },
        legendItemClick: function () {
          // console.log('legend item clicked!');
          // const series = this.chart.series;
          // for (let i = 0; i < series.length; i++) {
          //   series[i].visible = true;
          // }
          // this.visible - a boolean that tells whether the item is visible or not.
          // console.log('this is:', this);
          // return true to hide or show. fasle doesn't change the status.

          return true;
        },
      },
      // dataLabels: {
      //   enabled: true, // Defaults to false. Enable or disable the data labels.
      //   align: 'left', // Defaults to center. Options are: 'left', 'center' or 'right'. The alignment of the data label compared to the point. If right, the right side of the label should be touching the point. For points with an extent, like columns, the alignments also dictates how to align it inside the box, as given with the inside option.
      //   verticalAlign: 'bottom', // Defaults to bottom. Options are: 'top', 'middle' or 'bottom'. The vertical alignment of a data label. Can be one of top, middle or bottom. The default value depends on the data, for instance in a column chart, the label is above positive values and below negative values.
      //   allowOverlap: true, // Defaults to false. Whether to allow data labels to overlap.
      //   backgroundColor: 'auto', // Defaults to undefined. The background color or gradient for the data label. Setting it to 'auto' will use the point's color
      //   borderColor: 'blue', // Defaults to undefined. The border color for the data label. Setting it to auto will use the point's color.
      //   borderWidth: 1, // Defaults to 0. The border radius in pixels for the data label.
      //   borderRadius: 4, // Defaults to 0. The border radius in pixels for the data label.
      //   padding: 5, // Defaults to 5. When either the borderWidth or the backgroundColor is set, this is the padding within the box.
      //   crop: false, // Defaults to true. Whether to hide data labels that are outside the plot area. By default, the data label is moved inside the plot area according to the overflow option.
      //   defer: false, // Defaults to true. Whether to hide data labels that are outside the plot area. By default, the data label is moved inside the plot area according to the overflow option.
      //   rotation: -45, // Defaults to 0. Text rotation in degrees. Note that due to a more complex structure, backgrounds, borders and padding will be lost on a rotated data label.
      //   shadow: true, // Defaults to false. The shadow of the box. Works best with borderWidth or backgroundColor. Since 2.3 the shadow can be an object configuration containing color, offsetX, offsetY, opacity and width.
      //   x: 0, // Defaults to 0. The x position offset of the label relative to the point in pixels.
      //   y: -10, // Defaults to 0. The y position offset of the label relative to the point in pixels.
      //   zIndex: 2, // Defaults to 6. The z index of the data labels. Use a zIndex of 6 to display it above the series, or use a zIndex of 2 to display it behind the series.
      // },
      // The marker option here is weaker than the marker option of each data point declared within a series.
      point: {
        events: {
          /**
           * e contains a `point` property, which hold valuable information like:
           * • category                       - i.e. 'Apples'
           * • color                          - i.e. 'black'
           * • colorIndex                     - i.e. 0
           * • index of value in data series  - i.e. 3
           * • options                        - { name, x, y }
           * • percentage                     - undefined
           * • negative                       - i.e. true
           * • x                              - same value as options.x
           * • y                              - same value as options.x
           */
          click: onPointClick,
        },
      },
    },
    // remember this for when you'd want an area chart!!!
    // area: {
    //   fillColor: {
    //     linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
    //     stops: [
    //       [0, '#309F3D'], // Highcharts.getOptions().colors[1] , #FF8787, #309F3D
    //       [1, 'rgba(255,255,255,0.7)'], // Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')
    //     ],
    //   },
    //   marker: {
    //     radius: 2,
    //   },
    //   lineWidth: 1,
    //   states: {
    //     hover: {
    //       lineWidth: 1,
    //     },
    //   },
    //   threshold: null,
    // },
  },
});
