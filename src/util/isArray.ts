import { isArray as isArrayLodash } from "lodash";

/**
 * Wraps lodash's isArray function to return a type guard. We explicitly use any here to
 * @param {any} t the object to test if it is an array or not
 * @return {boolean} true if t is an array, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isArray<T>(t?: any): t is T[] {
  return isArrayLodash<T>(t);
}
