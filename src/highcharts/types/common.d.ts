import React from 'react';

declare interface SharedBarChartLineChartProps {
  /**
   * The title of the graph.
   *
   * @default ""
   */
  title?: string;
  /**
   * The style prop of the graph's title.
   *
   * @default { fontSize: 32, fontWeight: 'bold' }
   */
  titleStyle?: object;
  /**
   * The subtitle of the graph.
   *
   * @default ""
   */
  subtitle?: string;
  /**
   * The style prop of the graph's subtitle.
   *
   * @default { fontSize: 18, fontWeight: 'normal' }
   */
  subtitleStyle?: object;
  /**
   * The title of the legend.
   *
   * @default ""
   */
  legendTitleText?: string;
  /**
   * The xAxis title.
   *
   * @default ""
   */
  xAxisLabel?: string;
  /**
   * The style prop of the xAxis's title.
   *
   * @default { fontSize: 22 }
   */
  xAxisLabelStyle?: object;
  /**
   * The style prop of the xAxis's tick label.
   *
   * @default { fontSize: 18, fontFamily: 'Verdana, sans-serif' }
   */
  xAxisTickStyle?: object;
  /**
   * The xAxis title.
   *
   * @default ""
   */
  yAxisLabel?: string;
  /**
   * The style prop of the yAxis's title.
   *
   * @default { fontSize: 22 }
   */
  yAxisLabelStyle?: object;
  /**
   * The style prop of the yAxis's tick label.
   *
   * @default { fontSize: 18, fontFamily: 'Verdana, sans-serif' }
   */
  yAxisTickStyle?: object;
  /**
   * The minimum value of the axis. If null, the min value is automatically calculated.
   *
   * @default null
   */
  setMinX?: number;
  /**
   * The minimum value of the axis. If null, the min value is automatically calculated.
   *
   * @default null
   */
  setMinY?: number;
  /**
   * A boolean to decide whether xAxis ticks are rotated 45 degrees or not.
   *
   * @default false
   */
  areTicksRotated?: boolean;
  /**
   * A suffix that will be added to the y value. Example: 'cm'.
   *
   * @default ""
   */
  tooltipValueSuffix?: string;
  /**
   * A function that is called upon a data point click.
   *
   * @default function(PointerEvent:any){}
   */
  onPointClick?: () => void;
  /**
   * The chart's caption, which will render below the chart and will be part of exported charts. The caption can be updated after chart initialization through the Chart.update or Chart.caption.update methods.
   *
   * @default ''
   */
  captionText?: string;
  /**
   * Whether to apply dark mode on.
   *
   * @default false
   */
  isDarkMode?: boolean;
  /**
   * Status that tells whether the data is still loading or not.
   *
   * @default false
   */
  isLoading?: boolean;
  /**
   * The series object that holds the data to plot.
   *
   * @default undefined
   */
  series?: any;
  /**
   * The duration of the graph's animation. Defaults to 1000ms.
   *
   * @default 1000
   */
  animationDuration?: number;
  /**
   * The borderRadius of the chart's container
   *
   * @default undefined
   */
  borderRadius?: number;
}

export type { SharedBarChartLineChartProps };
