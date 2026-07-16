import Link from 'next/link';

export function EmptyCart() {
  return (
    <div className="flex min-h-[48vh] flex-col items-center justify-center gap-8 text-center">
      <p className="text-sm uppercase tracking-[0.2em]">Your cart is empty</p>
      <Link href="/" className="border border-black px-10 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-[#F7F5F2]">Return to Shop</Link>
    </div>
  );
}
