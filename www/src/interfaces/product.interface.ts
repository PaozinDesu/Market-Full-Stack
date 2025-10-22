import { IPaginatedResponse } from './paginatedResponse.interface';

export interface ICategory {
  name: string;
}

export interface IProductCategory {
  category: ICategory;
}

export interface IProductOption {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  productCategory: IProductCategory[];
  productOption: IProductOption[];
}

export type IProductResponse = IPaginatedResponse<IProduct>;
