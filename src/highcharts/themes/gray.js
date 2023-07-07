const gray = {
  chart: {
    backgroundColor: {
      linearGradient: [0, 0, 500, 500],
      stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(240, 240, 255)'],
      ],
    },
  },
  title: { style: { color: 'black' } },
  subtitle: { style: { color: '#666666' } },
  colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
  loading: { style: { backgroundColor: 'white', opacity: 0.5, color: 'black' } },
  legend: { itemStyle: { color: 'black' }, itemHoverStyle: { color: 'gray' } },
};

export { gray };
