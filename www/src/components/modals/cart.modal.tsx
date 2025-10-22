'use client';

import { useCart } from '../../hooks/useCart';
import { CardsCart } from '../cardsCart';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <div className="absolute right-0 bottom-0 flex max-h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-[rgba(0,0,0,0.05)]">
      <form className="absolute top-0 right-0 bottom-0 flex min-w-[600px] flex-col gap-8 rounded-tl-2xl rounded-bl-2xl bg-red-300 p-6">
        <h1 className="text-4xl font-bold text-slate-800">Your Cart</h1>
        <div>
          {cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <CardsCart cartItem={cartItem} />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export { Cart };
