import { IPaginatedResponse } from './paginatedResponse.interface';
import { IProduct } from './product.interface';

export interface ICart {
  id: string;
  ip: string;
  quantity: number;
  productId: string;
  product: IProduct;
}

export type ICartResponse = IPaginatedResponse<ICart>;
