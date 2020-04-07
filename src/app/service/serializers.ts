type ApiResponseShape<T> = {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
};

export function apiToStore<T>(response: ApiResponseShape<T>) {
  return response.results.map(obj => {});
}
