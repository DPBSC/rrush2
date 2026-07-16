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

  return <main className="min-h-screen px-[clamp(1rem,3vw,3rem)] pb-[clamp(4rem,7vw,7rem)] pt-[clamp(5.75rem,8vw,8rem)]">
    <div className="mx-auto grid w-full max-w-[min(94vw,1720px)] gap-[clamp(2rem,4vw,5rem)] lg:grid-cols-[minmax(13rem,0.68fr)_minmax(21rem,1.2fr)_minmax(14rem,0.72fr)] xl:grid-cols-[minmax(15rem,0.72fr)_minmax(28rem,1.1fr)_minmax(16rem,0.72fr)]">
      <aside className="order-2 self-start pt-0 lg:order-1 lg:sticky lg:top-[clamp(6rem,8vw,8rem)] lg:pt-[clamp(5rem,9vw,9rem)]">
        <div className="mb-[clamp(1.75rem,2.5vw,2.5rem)] hidden text-[clamp(0.82rem,0.82vw,0.95rem)] leading-[1.7] lg:block"><h1>{PRODUCT.name}</h1><p className="text-black/55">{PRODUCT.color}</p><p>${PRODUCT.price}</p></div>
        <Accordion title="Product Details">A heavyweight black hoodie cut for everyday wear, finished with restrained RRUSH identity and a soft structured hand.</Accordion>
        <Accordion title="Sizing">Designed with a relaxed, timeless fit. Choose your standard size for an easy silhouette or size up for additional volume.</Accordion>
        <Accordion title="Shipping & Returns">This pre-order presentation is visual only. Shipping and returns details will be confirmed when RRUSH commerce functionality launches.</Accordion>
      </aside>
      <div className="order-1 lg:order-2"><ProductGallery /></div>
      <aside className="order-3 self-start lg:sticky lg:top-[clamp(6rem,8vw,8rem)] lg:pt-[clamp(5rem,9vw,9rem)]">
        <div className="mb-[clamp(1.75rem,2.5vw,2.5rem)] text-[clamp(0.86rem,0.86vw,1rem)] leading-[1.7] lg:hidden"><h1>{PRODUCT.name}</h1><p className="text-black/55">{PRODUCT.color}</p><p>${PRODUCT.price}</p></div>
        <p className="mb-4 text-[clamp(0.72rem,0.72vw,0.82rem)] tracking-[0.08em]">Color: {PRODUCT.color}</p>
        <div className="mb-[clamp(1.5rem,2vw,2rem)] h-[clamp(2.5rem,3vw,2.9rem)] w-[clamp(2.5rem,3vw,2.9rem)] border border-black/20 bg-[#0D0D0D]" aria-label="Black color swatch" />
        <fieldset className="mb-[clamp(1.5rem,2vw,2rem)]">
          <legend className="mb-3 text-[clamp(0.72rem,0.72vw,0.82rem)] tracking-[0.08em]">Size: {selectedSize}</legend>
          <div className="grid grid-cols-4 gap-2">
            {sizes.map((size) => <button key={size} type="button" onClick={() => setSelectedSize(size)} className={`min-h-[clamp(2.75rem,3.2vw,3.15rem)] border px-3 text-[clamp(0.7rem,0.7vw,0.8rem)] uppercase tracking-[0.18em] transition-colors ${selectedSize === size ? 'border-black bg-black text-[#F7F5F2]' : 'border-black/20 text-black hover:border-black'}`} aria-pressed={selectedSize === size}>{size}</button>)}
          </div>
        </fieldset>
        <button onClick={handlePreOrder} className="mt-2 h-[clamp(3.35rem,4vw,3.8rem)] w-full bg-[#0D0D0D] px-6 text-[clamp(0.7rem,0.72vw,0.82rem)] uppercase tracking-[0.18em] text-[#F7F5F2] transition-colors duration-300 hover:bg-[#1C2533]">Pre-Order</button>
      </aside>
    </div>
  </main>;
}
