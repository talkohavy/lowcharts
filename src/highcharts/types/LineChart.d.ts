import { SharedBarChartLineChartProps } from './common';

declare interface LineChartProps extends SharedBarChartLineChartProps {
  /**
   * An array of objects. Each object represents a horizontal line.
   * An object representing a line can hold the following properties:
   *
   * **{ value: 5, width: 2, color: 'blue', zIndex: 1, dashStyle: 'longdash' }**
   *
   * All properties, _except value_, are optional, and the values shown above are the default.
   *
   * @default null
   */
  addHorizontalLines?: Array<PlotLines>;
  /**
   * An array of objects. Each object represents a vertical line.
   * An object representing a line can hold the following properties:
   *
   * **{ value: 5, width: 2, color: 'blue', zIndex: 1, dashStyle: 'longdash' }**
   *
   * All properties, _except value_, are optional, and the values shown above are the default.
   *
   * @default null
   */
  addVerticalLines?: Array<PlotLines>;
  /**
   * The default line width of the plotted line.
   *
   * @default undefined
   */
  lineWidth?: number;
}

declare interface PlotLines {
  /**
   * The constant value of the axis to attach to.
   */
  value: number;
  /**
   * The width of the plotted line.
   *
   * @default 2
   */
  width?: number;
  /**
   * The color of the plotted line.
   *
   * @default 'blue'
   */
  color?: string;
  /**
   * If the plotted line is shown behind another, and you want to bump it up to the front, increase this number.
   *
   * @default 1
   */
  zIndex?: number;
  /**
   * The style of the plotted line.
   * Options are: 'Dash' | 'DashDot' | 'Dot' | 'LongDash' | 'LongDashDot' | 'LongDashDotDot' | 'ShortDash' | 'ShortDashDot' | 'ShortDashDotDot' | 'ShortDot' | 'Solid'.
   *
   * @default 'longdash'
   */
  dashStyle?: string;
}

export { LineChartProps };
