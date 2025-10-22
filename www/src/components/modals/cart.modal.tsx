'use client';

import { api } from '@/services/api';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
import { Button } from '../button';
import { CardsCart } from '../cardsCart';

interface CartModalProps {
  cartModalOpened: boolean;
  setCartModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartModal: React.FC<CartModalProps> = ({
  cartModalOpened,
  setCartModalOpened,
}) => {
  const { cartItems, handleFetchCartItems } = useCart();

  useEffect(() => {
    handleFetchCartItems();
  }, [cartModalOpened, handleFetchCartItems]);

  function handleCreateOrder() {
    api.post('/orders').then(() => {
      handleFetchCartItems();
      setCartModalOpened(false);
    });
  }

  if (!cartModalOpened) return;

  return (
    <div className="absolute right-0 bottom-0 flex max-h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.05)]">
      <section className="absolute top-0 right-0 bottom-0 flex min-w-[600px] flex-col gap-8 rounded-tl-2xl rounded-bl-2xl bg-red-300 p-6">
        <header className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-800">Your Cart</h1>
          <X
            strokeWidth={2}
            size={24}
            className="icons text-slate-200"
            onClick={() => setCartModalOpened(false)}
          />
        </header>
        <div className="space-y-4">
          {cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <CardsCart cartItem={cartItem} />
            </div>
          ))}
        </div>
        <Button
          text="Create Order"
          onClick={handleCreateOrder}
        />
      </section>
    </div>
  );
};

export { CartModal };
