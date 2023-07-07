const light = {
  chart: { backgroundColor: 'white' },
  title: { style: { color: 'black' } },
  subtitle: { style: { color: '#666666' } },
  loading: { style: { backgroundColor: 'white', opacity: 0.5, color: 'black' } },
  // highcharts default colors:
  colors: [
    '#2f7ed8',
    '#0d233a',
    '#8bbc21',
    '#910000',
    '#1aadce',
    '#492970',
    '#f28f43',
    '#77a1e5',
    '#c42525',
    '#a6c96a',
  ],
  xAxis: {
    gridLineColor: '#e6e6e6',
    labels: { style: { color: '#666666' } },
    lineColor: '#ccd6eb',
    minorGridLineColor: '#e6e6e6',
    tickColor: '#dddddd',
    title: { style: { color: '#666666' } },
  },
  yAxis: {
    gridLineColor: '#e6e6e6',
    labels: { style: { color: '#666666' } },
    lineColor: '#ccd6eb',
    minorGridLineColor: '#e6e6e6',
    tickColor: '#dddddd',
    title: { style: { color: '#666666' } },
  },
  plotOptions: {
    series: { dataLabels: { color: 'black' }, marker: { lineColor: 'white' } },
    // boxplot: { fillColor: '#505053' }, // this setting is from dark theme...
    // candlestick: { lineColor: 'white' }, // this setting is from dark theme...
    // errorbar: { color: 'white' }, // this setting is from dark theme...
  },
  legend: {
    backgroundColor: 'transparent',
    itemStyle: { color: 'black' },
    itemHoverStyle: { color: 'black' },
    itemHiddenStyle: { color: '#606063' },
    title: { style: { color: 'black' } },
  },
  // Even when enabled, my tooltip wins! So in order to see how this tooltip affects, you'll need to disable your own tooltip design.
  // tooltip: {
  //   backgroundColor: 'rgba(0, 0, 0, 0.85)',
  //   style: { color: '#F0F0F0' },
  // },
  // Could not find where navigation is being used...
  // navigation: {
  //   buttonOptions: { symbolStroke: 'yellow', theme: { fill: 'yellow' } },
  // },
  // Could not find where rangeSelector is being used...
  // rangeSelector: {
  //   buttonTheme: {
  //     fill: 'yellow',
  //     stroke: 'yellow',
  //     style: { color: 'yellow' },
  //     states: {
  //       hover: {
  //         fill: 'yellow',
  //         stroke: 'yellow',
  //         style: { color: 'yellow' },
  //       },
  //       select: {
  //         fill: 'yellow',
  //         stroke: 'yellow',
  //         style: { color: 'yellow' },
  //       },
  //     },
  //   },
  //   inputBoxBorderColor: 'yellow',
  //   inputStyle: { backgroundColor: 'yellow', color: 'yellow' },
  //   labelStyle: { color: 'yellow' },
  // },
  // Could not find where navigator is being used...
  // navigator: {
  //   handles: { backgroundColor: '#666', borderColor: '#AAA' },
  //   outlineColor: '#CCC',
  //   maskFill: 'rgba(255,255,255,0.1)',
  //   series: { color: '#7798BF', lineColor: '#A6C7ED' },
  //   xAxis: { gridLineColor: '#505053' },
  // },
  // Could not find where scrollbar is being used...
  // scrollbar: {
  //   barBackgroundColor: '#808083',
  //   barBorderColor: '#808083',
  //   buttonArrowColor: '#CCC',
  //   buttonBackgroundColor: '#606063',
  //   buttonBorderColor: '#606063',
  //   rifleColor: '#FFF',
  //   trackBackgroundColor: '#404043',
  //   trackBorderColor: '#404043',
  // },
};

export { light };
