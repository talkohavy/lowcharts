// -------------------------------------
// Function 1: placeValueInCorrectBucket
// -------------------------------------
function placeValueInCorrectBucket({ value, buckets, sampleSize }) {
  for (let i = 0; i < buckets.length - 1; i++) {
    if (value < parseFloat(buckets[i + 1].bucketValue)) {
      buckets[i].y += sampleSize ? 100 / sampleSize : 1;
      break;
    }
  }
}

// -------------------------
// Function 2: createBuckets
// -------------------------
/**
 * @param {{ bucketsCount: number, from: number, to: number }} props
 * @description
 * bucketValue is what's important here. It will be used later to determine which result falls into which bucket.
 * x value running from 0 to bucketsCount is also important, because of how Highcharts works with 'column' (their BarChart).
 */
function createBuckets({ bucketsCount, from, to }) {
  const diffStep = (to - from) / bucketsCount;
  const buckets = [];

  for (let i = 0, bucketValue = from; i < bucketsCount; bucketValue += diffStep, i++) {
    buckets.push({ bucketValue: bucketValue.toFixed(2), x: i, y: 0 });
  }

  return buckets;
}

// -----------------------------
// Function 3: createDensityData
// -----------------------------
function createDensityData({ data, from, to, bucketsCount }) {
  // Step 1: create buckets & categories
  const densityData = createBuckets({ bucketsCount, from, to });

  // Step 2: place each randomly distributed number in the correct bucket
  for (const value of data) {
    placeValueInCorrectBucket({ value, buckets: densityData, sampleSize: data.length });
  }

  // Step 3: return the series and the categories
  return densityData;
}

export { createDensityData };
