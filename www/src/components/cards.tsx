'use client';

import { Button } from '@/components/button';
import { ICart } from '@/interfaces/cart.interface';
import { IProduct } from '@/interfaces/product.interface';
import { api } from '@/services/api';
import { formatCurrencyUtil } from '@/utils/formatCurrency.util';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface CardProps {
  product: IProduct;
  cartItems: ICart[];
  handleFetchCartItems: () => void;
  setCartModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<CardProps> = ({
  product,
  cartItems,
  handleFetchCartItems,
  setCartModalOpened,
}) => {

  function handleAddToCart() {
    api.post('/carts', { productId: product.id, quantity: 1 }).then(() => {
      handleFetchCartItems();
      toast.success('Product added to cart!');
    });
  }
  function handleOpenCart() {
    setCartModalOpened(true);
  }

  const addedToCart = cartItems.some((item) => item.productId == product.id);

  return (
    <div className="flex h-fit w-[300px] flex-col overflow-hidden rounded-2xl bg-slate-100 pb-3 shadow-2xl">
      <div className="flex w-full items-center justify-center overflow-hidden">
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
        {addedToCart ? (
          <Button
            text="See on cart"
            onClick={handleOpenCart}
            icon={<ShoppingBag />}
            iconPosition="right"
          />
        ) : (
          <Button
            text="Add to cart"
            onClick={handleAddToCart}
            icon={<ShoppingCart />}
            iconPosition="right"
          />
        )}
      </div>
    </div>
  );
};

export { Card };
