'use client';

import { api } from '@/services/api';
import { formatCurrencyUtil } from '@/utils/formatCurrency.util';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
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
  const [totalValue, setTotalValue] = useState(0);
  const { cartItems, handleFetchCartItems } = useCart();
  useEffect(() => {
    handleFetchCartItems();
  }, [cartModalOpened, handleFetchCartItems]);

  function handleCreateOrder() {
    if (cartItems.length < 1) {
      toast.error('Your cart is empity, Please add some product.');
      return;
    }
    api.post('/orders').then(() => {
      handleFetchCartItems();
      setCartModalOpened(false);
      toast.success('Order created!');
    });
  }

  function updateTotalValue() {
    setTotalValue;
  }

  if (!cartModalOpened) return;

  return (
    <section className="absolute top-0 right-0 bottom-0 flex min-w-[600px] flex-col gap-8 overflow-y-scroll rounded-tl-2xl rounded-bl-2xl bg-slate-300 p-6 shadow">
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-slate-800">Your Cart</h1>
        <X
          strokeWidth={2}
          size={32}
          className="icons rounded-[100%] bg-slate-200 p-1 text-slate-500 transition hover:bg-slate-100"
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
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Total: {formatCurrencyUtil(totalValue)}
        </h1>
      </div>
      <Button
        bgColor="bg-cyan-500"
        textColor="text-slate-200"
        hoverColor="hover:bg-cyan-600"
        text="Create Order"
        onClick={handleCreateOrder}
      />
    </section>
  );
};

export { CartModal };
