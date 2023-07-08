import Dashboard from '../../dashboards/Dashboard';
import { exampleWidgetsData } from '../../dashboards/exampleWidgetsData';

const widgetsLayout = [
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
];

export default function DashboardPage() {
  return (
    <div className='flex flex-col items-center justify-start gap-4 w-full h-full p-4'>
      <div className='text-4xl font-bold'>Dashboards Page</div>
      <Dashboard widgetsLayout={widgetsLayout} />
    </div>
  );
}
