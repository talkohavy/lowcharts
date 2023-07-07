/**
 * @param {{ a:number, b: number }} lambda
 * @returns { number }
 * @description
 * Call this function to generate an uniformic distributed number between a & b.
 */
function runif({ a, b }) {
  return (b - a) * Math.random() + a;
}

export { runif };
