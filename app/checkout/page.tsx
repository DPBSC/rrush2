import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-5 pt-16 text-center">
      <h1 className="text-sm uppercase tracking-[0.22em]">Checkout Coming Soon</h1>
      <Link href="/cart" className="border border-black px-10 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-[#F7F5F2]">Return to Cart</Link>
    </main>
  );
}
