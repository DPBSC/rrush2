'use client';

import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { EmptyCart } from '@/components/cart/EmptyCart';
import { useCart } from '@/components/cart/CartProvider';

export default function CartPage() {
  const { items } = useCart();

  return (
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
