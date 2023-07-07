// ---------------------
// Function 1: is object
// ---------------------
/**
 * @param { object } toBeChecked The value to be checked.
 * @returns { toBeChecked is Object<string, object> } Returns true or false.
 * @description This function accepts a variable and checks if it's og type object. NOTE: {} would return true, while [] and null would return false.
 */
function isObject(toBeChecked) {
  return typeof toBeChecked === 'object' && !Array.isArray(toBeChecked) && toBeChecked !== null;
}

// ---------------------
// Function 2: isNullish
// ---------------------
/**
 * @param { object } value The value to check.
 * @returns { boolean } Returns if a cerntain value is nullish.
 * @description This function accepts a value and check whether it's equal to null or to undefined.
 */
function isNullish(value) {
  return value == null;
}

// ----------------------------
// Function 3: is a jsObj empty
// ----------------------------
/**
 * @param { Object<string, any> } obj The object to be checked.
 * @returns { boolean } Returns true or false.
 * @description This function accepts a js object and checks whether it's empty.
 */
function isObjEmpty(obj) {
  for (const i in obj) return false;
  return true;
}

// ----------------------
// Function 4: deep merge
// ----------------------
/**
 * @param { object } obj1 The weaker object
 * @param { object } obj2 The stronger object
 * @returns { object } A copy of the two objects deeply merged.
 * @example
 * const first = { a: 'tal', b: { aaa: { one: 1 }, bbb: true, ccc: 'yesss!' }, c: [1,2,3] };
 * const second = { a: 'daniel', b: { ccc: 'noooo' }, c: [1,2], d: 'new' };
 *
 * console.log(deepMerge(first,second)); // Expected result: { a: "daniel", b: { aaa: { one: 1 }, bbb: true, ccc: "noooo" }, c: [1,2], d: 'new' }
 */
// Note! this must be an arrow function!
const deepMerge = (obj1, obj2) =>
  [...Object.keys(obj1), ...Object.keys(obj2)]
    .filter((value, index, array) => array.indexOf(value) === index)
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]:
          obj1[key] && obj2[key] && isObject(obj1[key]) && isObject(obj2[key])
            ? deepMerge(obj1[key], obj2[key])
            : obj2[key] ?? obj1[key],
      }),
      {}
    );

// -----------------
// Function 5: times
// -----------------
/**
 * @param {{ howMany: number, funcToRun: (i:number) => void }} props The props
 */
function times({ howMany, funcToRun }) {
  for (let i = 0; i < howMany; i++) funcToRun(i);
}

// -----------------------------
// Function 6: jsonToQueryString
// -----------------------------
/**
 * @param { object } params The queryParams object.
 * @returns { string } Returns a queryString which starts with ?.
 * @description This function accepts a jsObj representing QueryParams, and turns it into a queryString of type string. Note that objects and nulls would be filtered out. Note! this function ASSUMES you are passing a non-empty object!
 * @example
 *
 * const queryString1 = jsonToQueryString({ foo: bar, zoo: zar }); // Returns '?foo=bar&zoo=zar'
 * const queryString2 = jsonToQueryString({ hello: 'world', c: null, obj: { a: 'hi' } }); // Returns '?hello=world'
 */
function jsonToQueryString(params) {
  return `?${Object.entries(params)
    .filter(([, v]) => !isObject(v) && v !== null)
    .map(([k, v]) => {
      if (Array.isArray(v)) {
        let str = `${k}=${v[0]}`;
        for (let i = 1; i < v.length; i++) str = `${str}&${k}=${v[i]}`;

        return str;
      }
      return `${k}=${v}`;
    })
    .join('&')}`;
}

// --------------------------
// Function 7: getArrMaxValue
// --------------------------
/**
 * @param {{ arr: Array, predicate: (value: any) => number }} props
 * @returns { number } Returns a the maxValue
 * @description This function accepts an array of objects, and returns the maxValue based on some predicate which accepts a current item.
 * @example
 *
 * const maxLength = getArrMaxValue({ arr: series, predicate: (item) => item.data.length });
 */
function getArrMaxValue({ arr, predicate }) {
  return arr.reduce((curMaxValue, curItem) => {
    const curValue = predicate(curItem);
    return curMaxValue > curValue ? curMaxValue : curValue;
  }, undefined);
}

export { deepMerge, getArrMaxValue, isNullish, isObjEmpty, isObject, jsonToQueryString, times };
