'use client';

import { api } from '@/services/api';
import { formatCurrencyUtil } from '@/utils/formatCurrency.util';
import { X } from 'lucide-react';
import { useEffect } from 'react';
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
  const { cartItems, handleFetchCartItems, getTotalValue } = useCart();

  useEffect(() => {
    if (!cartModalOpened) return;
    handleFetchCartItems();
  }, [cartModalOpened]);

  function handleCreateOrder() {
    if (cartItems.length < 1) {
      toast.error('Your cart is empty. Please, add some product.');
      return;
    }

    api.post('/orders').then(() => {
      handleFetchCartItems();
      setCartModalOpened(false);
      toast.success('Order created!');
    });
  }

  if (!cartModalOpened) return;

  return (
    <section className="absolute left-0 h-full w-full overflow-y-auto">
      <aside className="absolute top-0 right-0 grid h-full min-w-[600px] grid-cols-1 grid-rows-[80px_1fr_80px] rounded-tl-2xl rounded-bl-2xl bg-slate-300 shadow">
        <header className="flex items-center justify-between px-4 pt-4">
          <h1 className="text-2xl font-bold text-slate-800">Your Cart</h1>
          <X
            strokeWidth={2}
            size={32}
            className="icons rounded-[100%] bg-slate-200 p-1 text-slate-500 transition hover:bg-slate-100"
            onClick={() => setCartModalOpened(false)}
          />
        </header>
        <div className="space-y-4 overflow-y-auto px-4">
          {cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <CardsCart cartItem={cartItem} />
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between gap-2 px-4 pb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Total: {formatCurrencyUtil(getTotalValue())}
            </h1>
          </div>
          <Button
            bgColor="bg-cyan-500"
            textColor="text-slate-200"
            hoverColor="hover:bg-cyan-600"
            text="Create Order"
            onClick={handleCreateOrder}
          />
        </div>
      </aside>
    </section>
  );
};

export { CartModal };
