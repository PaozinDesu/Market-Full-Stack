'use client';

import { ICart, ICartResponse } from '@/interfaces/cart.interface';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';

export function useCart() {
  const [cartItems, setCartItems] = useState<ICart[]>([]);

  useEffect(() => {
    handleFetchCartItems();
  }, []);

  function handleFetchCartItems() {
    api.get<ICartResponse>('/carts').then((res) => {
      const data = res.data;
      const cartItems = data.result;
      setCartItems(cartItems);
    });
  }

  return { cartItems, handleFetchCartItems };
}
