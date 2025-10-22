'use client';

import { ICart } from '@/interfaces/cart.interface';
import { api } from '@/services/api';
import { formatCurrencyUtil } from '@/utils/formatCurrency.util';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface CardCartProps {
  cartItem: ICart;
}
function handleMinusQuantity(id: string, quantity: number) {
  const newQauntity = quantity - 1;
  if (newQauntity < 1) {
    toast.error('You cannot have less than 1 product');
    return;
  }

  api.put(`/carts/${id}`, { quantity: newQauntity }).then(() => {});
}

function handlePlusQuantity(id: string, quantity: number) {
  const newQauntity = quantity + 1;
  if (newQauntity > 10) {
    toast.error('You cannot have more than 10 products');
    return;
  }

  api.put(`/carts/${id}`, { quantity: newQauntity }).then(() => {});
}

function handleRemoveItem(id: string) {
  toast.success('product removed successfully');
  api.delete(`/carts/${id}`).then(() => {});
}
const CardsCart: React.FC<CardCartProps> = ({ cartItem }) => {
  return (
    <div className="flex h-fit w-full flex-row justify-between overflow-hidden rounded-2xl bg-slate-100 p-4 shadow-2xl">
      <div className="flex h-[160px] w-[160px] items-center justify-center overflow-hidden bg-cyan-200">
        <img
          className="h-full w-full"
          src={`data:image/jpeg;base64,${cartItem.product.image}`}
          alt=""
        />
      </div>

      <div className="flex flex-1 flex-col justify-between px-3">
        <div className="flex justify-between">
          <div className="">
            <h2 className="mainText">{cartItem.product.name}</h2>
            <p className="secundaryText">{cartItem.product.description}</p>
          </div>
        </div>
        <h4 className="mainText">
          {formatCurrencyUtil(cartItem.product.price * cartItem.quantity)}
        </h4>
      </div>
      <div className="flex flex-col items-end justify-between">
        <Trash2
          size={24}
          className="cursor-pointer text-slate-800"
          onClick={() => handleRemoveItem(cartItem.id)}
        />
        <div className="flex w-[120px] items-center justify-center gap-6 rounded-2xl border-2 border-slate-300 px-2">
          <Minus
            size={24}
            className="cursor-pointer text-slate-800"
            onClick={() => handleMinusQuantity(cartItem.id, cartItem.quantity)}
          />
          <h2 className="text-xl text-slate-800">{cartItem.quantity}</h2>
          <Plus
            size={24}
            className="cursor-pointer text-slate-800"
            onClick={() => handlePlusQuantity(cartItem.id, cartItem.quantity)}
          />
        </div>
      </div>
    </div>
  );
};

export { CardsCart };
