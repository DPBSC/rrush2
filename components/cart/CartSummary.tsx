'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCart } from './CartProvider';

function formatCurrency(amount: number) {
  return `$${amount}`;
}

export function CartSummary() {
  const router = useRouter();
  const { subtotal } = useCart();

  function handleCheckout() {
  const { subtotal, clearCart } = useCart();
  const [updated, setUpdated] = useState(false);

  function handleUpdateCart() {
    setUpdated(true);
    window.setTimeout(() => setUpdated(false), 1400);
  }

  function handleCheckout() {
    // Future checkout providers can call this after a confirmed payment.
    const handleSuccessfulCheckout = () => clearCart();
    void handleSuccessfulCheckout;
    router.push('/checkout');
  }

  return (
    <aside className="pt-1 lg:sticky lg:top-[clamp(6rem,8vw,8rem)] lg:self-start">
      <p className="mb-3 text-[clamp(0.82rem,0.82vw,0.95rem)] text-black/30">Taxes calculated at checkout</p>
      <div className="mb-[clamp(1.75rem,2.5vw,2.5rem)] flex items-center justify-between text-[clamp(0.86rem,0.9vw,1rem)] uppercase tracking-[0.16em]">
        <span>Subtotal</span>
        <span className="tracking-normal">{formatCurrency(subtotal)}</span>
      </div>
      <button type="button" onClick={handleCheckout} className="h-[clamp(3.5rem,4vw,3.75rem)] w-full bg-black px-6 text-[clamp(0.7rem,0.72vw,0.82rem)] uppercase tracking-[0.2em] text-[#F7F5F2] transition-colors hover:bg-[#1C2533]">
        Checkout
      </button>
    <aside className="pt-8 lg:pt-0">
      <p className="mb-3 text-sm text-black/25">Taxes calculated at checkout</p>
      <div className="mb-8 flex items-center justify-between text-sm uppercase tracking-[0.16em]">
        <span>Subtotal</span>
        <span className="tracking-normal">{formatCurrency(subtotal)}</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <button type="button" onClick={handleUpdateCart} className="h-16 border border-black bg-transparent px-6 text-[11px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-[#F7F5F2]">
          {updated ? 'Cart Updated' : 'Update Cart'}
        </button>
        <button type="button" onClick={handleCheckout} className="h-16 bg-black px-6 text-[11px] uppercase tracking-[0.2em] text-[#F7F5F2] transition-colors hover:bg-[#1C2533]">
          Checkout
        </button>
      </div>
    </aside>
  );
}
