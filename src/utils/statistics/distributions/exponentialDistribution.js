/**
 * @param { number } lambda
 * @returns { number }
 * @description
 * Call this function to generate an exponentially distributed number with lambda.
 */
function rexp(lambda) {
  return -(Math.log(1 - Math.random()) / lambda);
}

export { rexp };
