import Link from 'next/link';

export function EmptyCart() {
  return (
    <div className="flex min-h-[clamp(24rem,48vh,34rem)] flex-col items-center justify-center gap-[clamp(1.75rem,3vw,2.5rem)] text-center">
      <p className="text-[clamp(0.82rem,0.86vw,1rem)] uppercase tracking-[0.2em]">Your cart is empty</p>
      <Link href="/" className="border border-black px-[clamp(2rem,3vw,2.75rem)] py-4 text-[clamp(0.7rem,0.72vw,0.82rem)] uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-[#F7F5F2]">Return to Shop</Link>
    <div className="flex min-h-[48vh] flex-col items-center justify-center gap-8 text-center">
      <p className="text-sm uppercase tracking-[0.2em]">Your cart is empty</p>
      <Link href="/" className="border border-black px-10 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-[#F7F5F2]">Return to Shop</Link>
    </div>
  );
}
