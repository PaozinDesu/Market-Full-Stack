'use client';

import { Card } from '@/components/cards';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import { MoveLeft, MoveRight } from 'lucide-react';
import React, { useEffect } from 'react';

interface ProductsProps {
  cartModalOpened: boolean;
  setCartModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Products: React.FC<ProductsProps> = ({
  cartModalOpened,
  setCartModalOpened,
}) => {
  const { products, pagination, page, setPage } = useProducts();
  const { cartItems, handleFetchCartItems } = useCart();

  useEffect(() => {
    if (cartModalOpened) return;
    handleFetchCartItems();
  }, [cartModalOpened]);

  return (
    <div className="flex flex-col items-center overflow-x-hidden overflow-y-scroll rounded-t-2xl bg-slate-200 py-6">
      <div className="grid grid-cols-3 gap-x-12 gap-y-8">
        {products.map((product) => (
          <div key={product.id}>
            <Card
              product={product}
              cartItems={cartItems}
              handleFetchCartItems={handleFetchCartItems}
              setCartModalOpened={setCartModalOpened}
            />
          </div>
        ))}
      </div>

      {pagination && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="rounded px-3 py-1 text-slate-700 disabled:opacity-50"
          >
            <MoveLeft />
          </button>
          <span className="text-slate-700">{pagination.page}</span>
          <button
            disabled={page === pagination.totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="rounded px-3 py-1 text-slate-700 disabled:opacity-50"
          >
            <MoveRight />
          </button>
        </div>
      )}
    </div>
  );
};

export { Products };
