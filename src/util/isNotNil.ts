import { isNil } from "lodash";

export function isNotNil<T>(t: T | null | undefined): t is T {
  return !isNil(t);
}
