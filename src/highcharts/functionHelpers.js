// ------------------------------
// Function 1: createDynamicLabel
// ------------------------------
/**
 * @param {{
 *    chart: Partial<import('highcharts').Chart>,
 *    textContent: string,
 *    x?: number,
 *    y?: number,
 *    fontSize?: string,
 *    textColor?: string,
 *    backgroundColor?: string,
 *    borderColor?: string,
 *    borderRadius?: number,
 *    borderWidth?: number,
 * }} props
 */
function createDynamicLabel({
  chart,
  textContent,
  x,
  y,
  fontSize = '18px',
  textColor = 'white',
  backgroundColor = 'red',
  borderColor = 'black',
  borderRadius = 8,
  borderWidth = 2,
}) {
  const label = chart.renderer
    .label(textContent, x, y)
    .align({ align: 'center', verticalAlign: 'top', y })
    /**
     * About attr:
     * - **padding** is not really padding! Highcharts translates this number into a <rect/> with a width attr.
     * - **zIndex** is not needed if you use "toFront".
     * - **x** does the same as label's 2nd argument!
     * - **y** does the same as label's 3nd argument!
     */
    .attr({ fill: backgroundColor, stroke: borderColor, r: borderRadius, padding: 12, zIndex: 1 })
    /**
     * About css:
     * - fontWeight is optional, where '900' is like bold.
     * - width is optional, but you don't need it since the textContent will determine the width.
     * - cursor & opacity apply to the entire label.
     */
    .css({ fontSize, color: textColor, cursor: 'pointer', opacity: 0.9, strokeWidth: borderWidth })
    .addClass('my-highcharts-label') // <-- to adjust the basline of the text!
    .add();
  // .toFront(); // <--- brings to front! Note!!! This toFront thingy makes the graph appear behind grid lines, so I gave it up. Using zIndex instead.

  setTimeout(() => label.fadeOut(), 1500);
}

// -------------------
// Function 2: setZoom
// -------------------
/**
 * @param {import('Highcharts').Chart & import('Highcharts').ChartOptions} chart
 * @description
 * This function zooms out, setting extremes to what they initially were, and also hides the reset button.
 */
function resetZoom(chart) {
  chart?.zoomOut();
}

// -------------------
// Function 3: setZoom
// -------------------
/**
 * @param {{
 *    chart: import('Highcharts').Chart & import('Highcharts').ChartOptions,
 *    xMinValue?: number,
 *    xMaxValue?: number,
 *    yMinValue?: number,
 *    yMaxValue?: number,
 * }} props
 * This function programatically sets the chart's extremes (zoom-level), while taking care of making the resetButton disappear.
 * NOTE! All the values must be of type **number**! A string representation of a number won't work.
 */
function setZoom({ chart, xMinValue, xMaxValue, yMinValue, yMaxValue }) {
  if (chart) {
    /** @type {import('highcharts').Chart & import('highcharts').ChartOptions} */
    chart.xAxis[0].setExtremes(xMinValue, xMaxValue);
    chart.yAxis[0].setExtremes(yMinValue, yMaxValue);
    !chart.resetZoomButton && chart.showResetZoom();
  }
}

// ----------------------------
// Function 4: deep copy series
// ----------------------------
/**
 * @param { Array<any> } series
 * @returns { Array<any> } Returns a copy of the provided series
 * @description This function accepts a series made for highcharts, and returns a deep copy of it.
 * This function is needed because highcharts mutates the object, and a simple spread operator
 * isn't the right tool for task, since it may copy the first level objects, but if some of those
 * objects has a child object, that child would not get copied, meaning it would have the same reference.
 * As we know, highcharts series array contains objects with child objects. That's when deepCopy is useful.
 */
function deepCopySeries(series) {
  return series.map((obj) => ({ ...obj, data: [...obj.data] }));
}

// -----------------------------------------
// Function 5: create horizontal line series
// -----------------------------------------
/**
 * @param {{
 *  yValue: number,
 *  minXValue?: number,
 *  maxXValue?: number,
 *  seriesName?: string,
 *  lineColor?: string,
 *  lineWidth?: number,
 *  xFieldName?: string,
 *  yFieldName?: string,
 * }} props The props
 * @returns {{ name?: string, lineWidth?: number, marker: any, data: Array, lineColor?: string }} Returns a series data object.
 */
function createHorizontalLineSeries({
  yValue,
  minXValue = -Infinity,
  maxXValue = Infinity,
  seriesName,
  lineColor = 'blue',
  lineWidth = 2,
  xFieldName = 'x',
  yFieldName = 'y',
}) {
  return {
    name: seriesName,
    data: [
      { [xFieldName]: minXValue, [yFieldName]: yValue, name: ' ' },
      { [xFieldName]: maxXValue, [yFieldName]: yValue, name: ' ' },
    ],
    lineColor,
    lineWidth,
    marker: { enabled: false },
  };
}

export { createDynamicLabel, createHorizontalLineSeries, deepCopySeries, resetZoom, setZoom };
