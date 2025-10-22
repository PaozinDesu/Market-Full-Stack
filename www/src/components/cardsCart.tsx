'use client';

import { ICart } from '@/interfaces/cart.interface';
import { formatCurrencyUtil } from '@/utils/formatCurrency.util';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CardCartProps {
  cartItem: ICart;
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

      <div className="flex flex-1 flex-col justify-center gap-6 p-3">
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
          className="text-slate-800"
        />
        <div className="flex items-center justify-center gap-6 rounded-2xl border-2 border-slate-300 px-2">
          <Minus className="text-slate-800" />
          <h2 className="text-2xl text-slate-800">1</h2>
          <Plus className="text-slate-800" />
        </div>
      </div>
    </div>
  );
};

export { CardsCart };
