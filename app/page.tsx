'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Accordion } from '@/components/Accordion';
import { ProductGallery } from '@/components/ProductGallery';
import { useCart } from '@/components/cart/CartProvider';

const PRODUCT = {
  id: 'rrush-heavyweight-hoodie',
  name: 'RRUSH Heavyweight Hoodie',
  color: 'Black',
  price: 75,
  image: '/assets/hoodie-front.svg',
};

const sizes = ['S', 'M', 'L', 'XL'];

export default function Home() {
  const router = useRouter();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');

  function handlePreOrder() {
    addItem({ ...PRODUCT, size: selectedSize });
    router.push('/cart');
  }

  return <main className="min-h-screen px-5 pb-20 pt-24 md:px-10 md:pt-28">
    <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[300px_minmax(360px,520px)_300px] lg:gap-12">
      <aside className="order-2 self-start pt-0 lg:order-1 lg:sticky lg:top-32 lg:pt-36">
        <div className="mb-8 hidden text-sm leading-5 lg:block"><h1>{PRODUCT.name}</h1><p>{PRODUCT.color}</p><p>${PRODUCT.price}</p></div>
        <Accordion title="Product Details">A heavyweight black hoodie cut for everyday wear, finished with restrained RRUSH identity and a soft structured hand.</Accordion>
        <Accordion title="Sizing">Designed with a relaxed, timeless fit. Choose your standard size for an easy silhouette or size up for additional volume.</Accordion>
        <Accordion title="Shipping & Returns">This pre-order presentation is visual only. Shipping and returns details will be confirmed when RRUSH commerce functionality launches.</Accordion>
      </aside>
      <div className="order-1 lg:order-2"><ProductGallery /></div>
      <aside className="order-3 self-start lg:sticky lg:top-32 lg:pt-40">
        <div className="mb-8 text-sm leading-5 lg:hidden"><h1>{PRODUCT.name}</h1><p>{PRODUCT.color}</p><p>${PRODUCT.price}</p></div>
        <p className="mb-4 text-[11px] tracking-wide">Color: {PRODUCT.color}</p>
        <div className="mb-6 h-11 w-11 border border-black/20 bg-[#0D0D0D]" aria-label="Black color swatch" />
        <fieldset className="mb-6">
          <legend className="mb-3 text-[11px] tracking-wide">Size: {selectedSize}</legend>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size) => <button key={size} type="button" onClick={() => setSelectedSize(size)} className={`border px-3 py-3 text-[11px] uppercase tracking-[0.18em] transition-colors ${selectedSize === size ? 'border-black bg-black text-[#F7F5F2]' : 'border-black/20 text-black hover:border-black'}`} aria-pressed={selectedSize === size}>{size}</button>)}
          </div>
        </fieldset>
        <button onClick={handlePreOrder} className="mt-2 w-full bg-[#0D0D0D] px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-[#F7F5F2] transition-colors duration-300 hover:bg-[#1C2533]">Pre-Order</button>
      </aside>
    </div>
  </main>;
}
