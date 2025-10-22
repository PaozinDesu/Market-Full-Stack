'use client';

import { Button } from '@/components/button';
import { IProduct } from '@/interfaces/product.interface';
import { api } from '@/services/api';
import { formatCurrencyUtil } from '@/utils/formatCurrency.util';

interface CardProps {
  product: IProduct;
}

import { ShoppingCart } from 'lucide-react';

const Card: React.FC<CardProps> = ({ product }) => {
  function handleAddToCart() {
    api.post('/carts', { productId: product.id, quantity: 1 });
  }
  return (
    <div className="flex h-fit w-[300px] flex-col overflow-hidden rounded-2xl bg-slate-100 pb-3 shadow-2xl">
      <div className="flex h-[160px] w-full items-center justify-center overflow-hidden">
        <img
          className="h-full w-full"
          src={`data:image/jpeg;base64,${product.image}`}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-2 p-3">
        <div className="flex justify-between">
          <div className="">
            <h2 className="mainText">{product.name}</h2>
            <p className="secundaryText">{product.description}</p>
          </div>
        </div>
        <h4 className="mainText">{formatCurrencyUtil(product.price)}</h4>
        <Button
          text="Add to cart"
          onClick={handleAddToCart}
          icon={<ShoppingCart />}
          iconPosition="right"
        />
      </div>
    </div>
  );
};

export { Card };
