'use client';

import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { useCart } from '@/components/cart/CartProvider';

export default function CartPage() {
  const { items } = useCart();

  return (
    <main className="min-h-screen px-[clamp(1rem,3vw,3rem)] pb-[clamp(4rem,7vw,7rem)] pt-[clamp(6.25rem,8.5vw,8.5rem)]">
      <div className="mx-auto w-full max-w-[min(94vw,1760px)]">
        <h1 className="mb-[clamp(2.5rem,4vw,4.25rem)] text-[clamp(0.82rem,0.86vw,1rem)] uppercase tracking-[0.2em]">Cart</h1>
        {items.length === 0 ? <EmptyCart /> : (
          <div className="grid gap-[clamp(3rem,5vw,6rem)] lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)] xl:grid-cols-[minmax(0,1fr)_minmax(24rem,34rem)]">
    <main className="min-h-screen px-5 pb-20 pt-28 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <h1 className="mb-10 text-sm uppercase tracking-[0.2em] md:mb-14">Cart</h1>
        {items.length === 0 ? <EmptyCart /> : (
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:gap-24">
            <section aria-label="Cart items" className="border-t border-black/10">
              {items.map((item) => <CartItem key={`${item.id}-${item.color}-${item.size}`} item={item} />)}
            </section>
            <CartSummary />
          </div>
        )}
      </div>
    </main>
  );
}
