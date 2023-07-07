import { SharedBarChartLineChartProps } from './common';

declare interface BarChartProps extends SharedBarChartLineChartProps {
  /**
   * Decide whether to display bars in the same color, or in many colors.
   *
   * @default false
   */
  colorful?: boolean;
  /**
   * The xAxis values which would appear below the bars.
   *
   * @default null
   */
  categories?: Array<string | number>;
  /**
   * A boolean that indicates whether to hide the x label of the categories.
   *
   * @default false
   */
  hideCategories?: boolean;
  /**
   * An optional prefix for the label value appearing in the middle of each bar.
   *
   * @default ""
   */
  barLabelPrefix?: string;
  /**
   * An optional suffix for the label value appearing in the middle of each bar.
   *
   * @default ""
   */
  barLabelSuffix?: string;
  /**
   * The width of each column in pixels.
   *
   * @default undefined
   */
  columnWidth?: number;
}

export { BarChartProps };
