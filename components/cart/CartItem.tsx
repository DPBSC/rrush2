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
    <article className="grid gap-[clamp(1.5rem,3vw,3rem)] border-b border-black/10 py-[clamp(1.75rem,3vw,3.5rem)] sm:grid-cols-[clamp(8.5rem,18vw,15rem)_1fr] lg:grid-cols-[clamp(10rem,16vw,15rem)_1fr_auto]">
      <div className="product-frame flex aspect-[4/5] w-full max-w-[15rem] items-center justify-center sm:max-w-none">
        <Image src={item.image} alt={item.name} width={360} height={450} className="h-full w-full object-contain p-[clamp(1rem,2vw,1.75rem)]" />
      </div>
      <div className="flex flex-col justify-center gap-[clamp(1.25rem,2vw,2rem)] text-[clamp(0.86rem,0.86vw,1rem)] leading-[1.7]">
        <div>
          <h2>{item.name}</h2>
          <p className="text-black/45">{item.color} / {item.size}</p>
          <p>{formatCurrency(item.price)}</p>
        </div>
        <QuantitySelector quantity={item.quantity} onDecrease={() => decreaseQuantity(item.id, item.size, item.color)} onIncrease={() => increaseQuantity(item.id, item.size, item.color)} />
      </div>
      <div className="flex items-start justify-between gap-8 text-[clamp(0.82rem,0.82vw,0.95rem)] sm:col-start-2 lg:col-start-auto lg:flex-col lg:items-end lg:justify-center">
        <p>{formatCurrency(item.price * item.quantity)}</p>
        <button type="button" onClick={() => removeItem(item.id, item.size, item.color)} className="uppercase tracking-[0.16em] text-black/70 transition-colors hover:text-black">Remove</button>
      </div>
    </article>
  );
}
