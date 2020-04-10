import { camelCaseAllKeys } from "../utils";

type ApiResponseShape<T> = {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
};

export function apiToStore<T>(response: ApiResponseShape<T>): T[] {
  return response.results.map(camelCaseAllKeys);
}
