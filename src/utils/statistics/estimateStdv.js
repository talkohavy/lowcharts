/**
 * @param { Array<number> } data
 * @returns { number } Returns the standard deviation
 */
function stdv(data) {
  const n = data.length;
  const mean = data.reduce((sum, val) => sum + val, 0) / n;
  const squaredDifferences = data.map((val) => (val - mean) ** 2);
  const sumSquaredDifferences = squaredDifferences.reduce((sum, val) => sum + val, 0);
  const variance = sumSquaredDifferences / (n - 1);
  const stdv = Math.sqrt(variance);
  return stdv;
}

/**
 * @param { Array<Array<number>> } dataArr
 * @returns { number } Returns the pooled standard deviation
 * @description
 * This function calculates the "pooled standard deviation".
 * The exact formula this function is based on is this:
 * S_pooled = √((s1^2 + s2^2 + ... + sN^2) / N)
 * where each standard deviation (s1,s2,etc.) is a sub-sample group.
 * This function assumes that the sample size for all groups is the same. Critical!
 * An example case could be a daily sample of 10 item, and doing so for 1000 days straight.
 * NOTE! For this formula to work, each group must contain more than 1 value!
 */
function pooledStdv(dataArr) {
  const sumSquaredStdvs = dataArr.reduce((sum, curDailySamples) => sum + stdv(curDailySamples) ** 2, 0);

  return Math.sqrt(sumSquaredStdvs / dataArr.length);
}

export { pooledStdv, stdv };
