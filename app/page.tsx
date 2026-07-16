import { Accordion } from '@/components/Accordion';
import { ProductGallery } from '@/components/ProductGallery';

export default function Home() {
  return <main className="min-h-screen px-5 pb-20 pt-24 md:px-10 md:pt-28">
    <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[300px_minmax(360px,520px)_300px] lg:gap-12">
      <aside className="order-2 self-start pt-0 lg:order-1 lg:sticky lg:top-32 lg:pt-36">
        <div className="mb-8 hidden text-sm leading-5 lg:block"><h1>RRUSH Heavyweight Hoodie</h1><p>Black</p><p>$75</p></div>
        <Accordion title="Product Details">A heavyweight black hoodie cut for everyday wear, finished with restrained RRUSH identity and a soft structured hand.</Accordion>
        <Accordion title="Sizing">Designed with a relaxed, timeless fit. Choose your standard size for an easy silhouette or size up for additional volume.</Accordion>
        <Accordion title="Shipping & Returns">This pre-order presentation is visual only. Shipping and returns details will be confirmed when RRUSH commerce functionality launches.</Accordion>
      </aside>
      <div className="order-1 lg:order-2"><ProductGallery /></div>
      <aside className="order-3 self-start lg:sticky lg:top-32 lg:pt-40">
        <div className="mb-8 text-sm leading-5 lg:hidden"><h1>RRUSH Heavyweight Hoodie</h1><p>Black</p><p>$75</p></div>
        <p className="mb-4 text-[11px] tracking-wide">Color: Black</p>
        <div className="mb-4 h-11 w-11 border border-black/20 bg-[#0D0D0D]" aria-label="Black color swatch" />
        <button className="mt-2 w-full bg-[#0D0D0D] px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-[#F7F5F2] transition-colors duration-300 hover:bg-[#1C2533]">Pre-Order</button>
      </aside>
    </div>
  </main>;
}
