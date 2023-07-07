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
  credits: { enabled: false },
  accessibility: { enabled: false },
  chart: {
    zoomType: 'xy',
    panning: true,
    panKey: 'shift',
    plotBorderWidth: 1,
    resetZoomButton: {
      position: { align: 'right', verticalAlign: 'top' },
      theme: {
        height: 20,
        fill: '#f7f7f7',
        stroke: 'silver',
        r: 8,
        states: { hover: { fill: '#41739D', style: { color: 'white' } } },
        style: { fontSize: 18, color: 'blue' },
      },
    },
  },
  title: { text: title, style: { ...GLOBAL_CHART_DEFAULT_THEME.titleStyle, ...titleStyle } },
  subtitle: { text: subtitle, style: { ...GLOBAL_CHART_DEFAULT_THEME.subtitleStyle, ...subtitleStyle } },
  loading: { showDuration: 200, hideDuration: 300, labelStyle: GLOBAL_CHART_DEFAULT_THEME.loadingStyle },
  lang: { loading: 'loading...' },
  legend: {
    title: { text: legendTitleText ?? 'Legend:' },
    align: 'center',
    verticalAlign: 'bottom',
    layout: 'horizontal',
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
          callback() {
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
  caption: { text: captionText },
  plotOptions: {
    series: {
      animation: { duration: animationDuration },
      events: {
        // afterAnimate: function () {},
        // legendItemClick: function () {},
      },
      point: { events: { click: onPointClick } },
    },
  },
});
