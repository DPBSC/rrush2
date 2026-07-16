'use client';
import { useState } from 'react';

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="border-b border-black/80">
    <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left text-[11px] tracking-wide">
      <span>{title}</span><span className={`text-lg transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
    </button>
    <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-60'}`}>
      <div className="overflow-hidden"><div className="pb-5 pr-6 text-xs leading-6 text-black/65">{children}</div></div>
    </div>
  </div>;
}
