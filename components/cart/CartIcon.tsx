'use client';

import Link from 'next/link';
import { useCart } from './CartProvider';

export function CartIcon() {
  const { totalQuantity } = useCart();

  return (
    <Link href="/cart" className="relative block p-1" aria-label={`Open cart${totalQuantity > 0 ? `, ${totalQuantity} item${totalQuantity === 1 ? '' : 's'}` : ''}`}>
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" aria-hidden="true">
        <path d="M6.2 7.3V5.8a4.3 4.3 0 0 1 8.6 0v1.5" stroke="currentColor" strokeWidth="1"/>
        <path d="M4.3 7.3h12.4l1.1 12.2H3.2L4.3 7.3Z" stroke="currentColor" strokeWidth="1"/>
      </svg>
      {totalQuantity > 0 ? <span className="absolute left-1/2 top-[9px] -translate-x-1/2 text-[9px] leading-none">{totalQuantity}</span> : null}
    </Link>
  );
}
