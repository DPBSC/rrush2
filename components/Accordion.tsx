'use client';
import { useState } from 'react';

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="border-b border-black/70">
    <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-[clamp(1rem,1.4vw,1.35rem)] text-left text-[clamp(0.72rem,0.74vw,0.82rem)] uppercase tracking-[0.12em]">
      <span>{title}</span><span className={`text-[clamp(1rem,1.2vw,1.25rem)] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>+</span>
    </button>
    <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-60'}`}>
      <div className="overflow-hidden"><div className="max-w-[34rem] pb-[clamp(1rem,1.35vw,1.35rem)] pr-6 text-[clamp(0.78rem,0.78vw,0.9rem)] leading-[1.8] text-black/65">{children}</div></div>
    </div>
  </div>;
}
