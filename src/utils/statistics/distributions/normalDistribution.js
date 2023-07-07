/**
 * The Box-Muller Formula
 * @returns { (props: {mu: number, sd: number}) => number } A function that generates a normally distributed number with µ and σ upon each call.
 * @description
 * This function is be called once upon program initiation to create one memoised generator function for normally distributed number.
 * Even if you switch the µ & σ half way through, you'd still use the function returned by this function. That's ok.
 */
function createNormalGenerator() {
  let y2;
  return ({ mu, sd }) => {
    // Step 3: return the second normally distributed number generated by Box-Muller
    if (y2) {
      const retValue = mu + sd * y2;
      y2 = null;
      return retValue;
    }

    // Step 1: sample two numbers from the uniform distribution
    let u1 = 0;
    let u2 = 0;
    while (u1 === 0) u1 = Math.random(); // Converting [0,1) to (0,1)
    while (u2 === 0) u2 = Math.random();

    // Step 2: generate 2 normally distributed numbers
    const R = Math.sqrt(-2.0 * Math.log(u1));
    const theta = 2.0 * Math.PI * u2;
    let y1 = R * Math.sin(theta);
    y2 = R * Math.cos(theta);
    return mu + sd * y1;
  };
}

/**
 * @description
 * Call this function to generate a normally distributed number with mu and sd.
 * @example
 * const mean = 0; // Mean of the normal distribution
 * const stdDev = 1; // Standard deviation of the normal distribution
 * const randomNumber = rnorm({ mean, stdDev });
 * console.log(randomNumber);
 */
export const rnorm = createNormalGenerator();