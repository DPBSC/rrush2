'use client';

import Image from 'next/image';
import { CartLineItem, useCart } from './CartProvider';
import { QuantitySelector } from './QuantitySelector';

function formatCurrency(amount: number) {
  return `$${amount}`;
}

export function CartItem({ item }: { item: CartLineItem }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <article className="grid gap-6 border-b border-black/10 py-8 sm:grid-cols-[180px_1fr_auto] lg:grid-cols-[240px_1fr_auto] lg:gap-8">
      <div className="product-frame flex aspect-[4/5] w-full max-w-[240px] items-center justify-center sm:w-[180px] lg:w-[240px]">
        <Image src={item.image} alt={item.name} width={360} height={450} className="h-full w-full object-contain p-5" />
      </div>
      <div className="flex flex-col justify-center gap-5 text-sm leading-6">
        <div>
          <h2>{item.name}</h2>
          <p className="text-black/45">{item.color} / {item.size}</p>
          <p>{formatCurrency(item.price)}</p>
        </div>
        <QuantitySelector quantity={item.quantity} onDecrease={() => decreaseQuantity(item.id, item.size, item.color)} onIncrease={() => increaseQuantity(item.id, item.size, item.color)} />
      </div>
      <div className="flex items-start justify-between gap-8 text-sm sm:flex-col sm:items-end sm:justify-center">
        <p>{formatCurrency(item.price * item.quantity)}</p>
        <button type="button" onClick={() => removeItem(item.id, item.size, item.color)} className="uppercase tracking-[0.16em] text-black/80 hover:text-black">Remove</button>
      </div>
    </article>
  );
}
