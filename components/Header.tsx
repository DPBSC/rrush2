'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CartIcon } from '@/components/cart/CartIcon';

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#F7F5F2]/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-[clamp(3.5rem,4.5vw,4.25rem)] max-w-[1920px] items-center justify-center px-[clamp(1rem,2.5vw,2.5rem)]">
        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="absolute left-[clamp(1rem,2.5vw,2.5rem)] flex h-10 w-10 flex-col justify-center gap-1.5">
          <span className="block h-px w-[clamp(1rem,1.4vw,1.25rem)] bg-black" /><span className="block h-px w-[clamp(1rem,1.4vw,1.25rem)] bg-black" /><span className="block h-px w-[clamp(1rem,1.4vw,1.25rem)] bg-black" />
        </button>
        <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 items-center" aria-label="RRUSH home"><Image src="/assets/rrush-wordmark.svg" alt="rrush" width={124} height={30} priority className="h-auto w-[clamp(5.75rem,7vw,7.75rem)]" /></Link>
        <div className="absolute right-[clamp(1rem,2.5vw,2.5rem)]"><CartIcon /></div>
      </div>
      <nav className={`overflow-hidden border-t border-black/10 bg-[#F7F5F2] transition-[max-height,opacity] duration-300 ease-out ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-auto flex max-w-[1920px] flex-col px-[clamp(1.5rem,3vw,3rem)] py-6 text-[clamp(0.72rem,0.78vw,0.84rem)] uppercase tracking-[0.16em]">
          <Link onClick={() => setOpen(false)} className="py-2" href="/">Home</Link>
          <Link onClick={() => setOpen(false)} className="py-2" href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
