import Image from 'next/image';

const images = [
  { src: '/assets/hoodie-front.svg', alt: 'RRUSH Heavyweight Hoodie front' },
  { src: '/assets/hoodie-back.svg', alt: 'RRUSH Heavyweight Hoodie back' },
  { src: '/assets/hoodie-detail.svg', alt: 'RRUSH Heavyweight Hoodie front detail' },
  { src: '/assets/hoodie-model.svg', alt: 'RRUSH Heavyweight Hoodie on model' },
];

export function ProductGallery() {
  return <section className="mx-auto w-full max-w-[470px] space-y-4 md:max-w-[520px]">
    {images.map((image, i) => <div key={image.src} className="product-frame fade-in flex aspect-[4/5] items-center justify-center" style={{ animationDelay: `${i * 80}ms` }}>
      <Image src={image.src} alt={image.alt} width={760} height={950} priority={i === 0} className="h-full w-full object-contain p-8 md:p-12" />
    </div>)}
  </section>;
}
