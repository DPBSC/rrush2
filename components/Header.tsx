'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CartIcon } from '@/components/cart/CartIcon';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#F7F5F2]/95 backdrop-blur-sm">
      <div className="relative flex h-14 items-center justify-center px-4 md:h-16 md:px-6">
        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="absolute left-4 flex h-8 w-8 flex-col justify-center gap-1.5 md:left-6">
          <span className="block h-px w-4 bg-black" /><span className="block h-px w-4 bg-black" /><span className="block h-px w-4 bg-black" />
        </button>
        <Link href="/" className="flex items-center" aria-label="RRUSH home"><Image src="/assets/rrush-wordmark.svg" alt="rrush" width={124} height={30} priority className="h-auto w-[92px] md:w-[112px]" /></Link>
        <div className="absolute right-4 md:right-6"><CartIcon /></div>
      </div>
      <nav className={`overflow-hidden border-t border-black/10 bg-[#F7F5F2] transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-6 text-sm uppercase tracking-[0.16em]">
          <Link onClick={() => setOpen(false)} className="py-2" href="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="py-2" href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
