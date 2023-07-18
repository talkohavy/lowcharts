import LineChartWidget from './Line/Renderer';
import BarChartWidget from './Column/Renderer';
import TextWidget from './Text/Renderer';

const widgetsMapper = {
  line: { renderer: LineChartWidget },
  column: { renderer: BarChartWidget },
  text: { renderer: TextWidget },
};

export { widgetsMapper };
