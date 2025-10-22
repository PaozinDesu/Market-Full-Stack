'use client';

import { IPagination } from '@/interfaces/paginatedResponse.interface';
import { IProduct, IProductResponse } from '@/interfaces/product.interface';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';

export function useProducts() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [pagination, setPagination] = useState<IPagination | null>(null);

  useEffect(() => {
    api.get<IProductResponse>(`/products?page=${page}&limit=9`).then((res) => {
      const data = res.data;
      const products = data.result;
      const pagination = data.pagination;

      setProducts(products);
      setPagination(pagination);
    });
  }, [page]);

  return { products, pagination, page, setPage };
}
