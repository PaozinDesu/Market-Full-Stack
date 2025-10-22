export interface IPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface IPaginatedResponse<T> {
  result: T[];
  pagination: IPagination;
}
