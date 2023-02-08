import { isArray as isArrayLodash } from "lodash";

export function isArray<T>(t: any): t is T[] {
  return isArrayLodash(t);
}
