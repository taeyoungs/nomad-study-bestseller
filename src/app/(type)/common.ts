export interface CustonResponse<T> {
  copyright: string;
  last_modified?: string;
  num_results: number;
  results: T;
  status: string;
}
