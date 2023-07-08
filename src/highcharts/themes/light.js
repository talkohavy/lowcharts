const light = {
  chart: { backgroundColor: 'white' },
  title: { style: { color: 'black' } },
  subtitle: { style: { color: '#666666' } },
  loading: { style: { backgroundColor: 'white', opacity: 0.5, color: 'black' } },
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
  plotOptions: { series: { dataLabels: { color: 'black' }, marker: { lineColor: 'white', fillColor: 'black' } } },
  legend: {
    backgroundColor: 'transparent',
    itemStyle: { color: 'black' },
    itemHoverStyle: { color: 'black' },
    itemHiddenStyle: { color: '#606063' },
    title: { style: { color: 'black' } },
  },
};

export { light };
