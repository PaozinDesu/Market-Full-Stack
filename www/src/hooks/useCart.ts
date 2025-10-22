'use client';

import { ICart, ICartResponse } from '@/interfaces/cart.interface';
import { api } from '@/services/api';
import { useEffect, useState } from 'react';

export function useCart() {
  const [cartItems, setCartItems] = useState<ICart[]>([]);

  useEffect(() => {
    handleFetchCartItems();
  }, [cartItems]);

  function handleFetchCartItems() {
    api.get<ICartResponse>('/carts').then((res) => {
      const data = res.data;
      const cartItems = data.result;
      setCartItems(cartItems);
    });
  }

  function getTotalValue() {
    return cartItems.reduce(
      (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
      0,
    );
  }

  return { cartItems, handleFetchCartItems, getTotalValue };
}
