import { exampleWidgetsData } from '../../dashboards/exampleWidgetsData';

export const mockData = [
  {
    id: 1,
    name: 'Demo Dashboard',
    createdAt: '2023-04-24T02:59:55Z',
    widgetsLayout: [
      // --------------------
      // Widget 1: TextWidget
      // --------------------
      {
        i: 'c',
        w: 6,
        h: 2,
        x: 9,
        y: 0,
        static: false,
        props: {
          type: 'text',
          textContent: 'This text is big!',
          fontSize: 36,
          fontWeight: 'bold',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
      // ------------------
      // Widget 2: BarChart
      // ------------------
      {
        i: 'a',
        w: 12,
        h: 10,
        x: 0,
        y: 2,
        minW: 2,
        minH: 2,
        static: false,
        props: {
          type: 'column',
          title: 'Country - Money Per Capita',
          subtitle: 'This is the subtitle',
          legendTitleText: '',
          description: 'lorem ipsum dolor',
          ...exampleWidgetsData.barChart,
        },
      },
      // -------------------
      // Widget 3: LineChart
      // -------------------
      {
        i: 'b',
        w: 12,
        h: 10,
        x: 12,
        y: 2,
        minW: 2,
        minH: 2,
        static: false,
        props: {
          type: 'line',
          title: 'My Awesome Chart',
          subtitle: 'It really whips the lammas ass',
          xAxisLabel: 'amount of x (millions)',
          yAxisLabel: 'amount of y (ms)',
          legendTitleText: '',
          tooltipValueSuffix: 'cm',
          description: 'lorem ipsum dolor',
          isLoading: false,
          ...exampleWidgetsData.lineChart,
        },
      },
    ],
  },
  {
    id: 2,
    name: 'Demo Dashboard 2',
    createdAt: '2023-05-24T02:59:55Z',
  },
  {
    id: 3,
    name: 'Demo Dashboard 3',
    createdAt: '2023-06-24T02:59:55Z',
  },
];
