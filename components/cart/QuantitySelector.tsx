'use client';

export function QuantitySelector({ quantity, onDecrease, onIncrease }: { quantity: number; onDecrease: () => void; onIncrease: () => void }) {
  return (
    <div className="flex items-center gap-5 text-base" aria-label="Quantity selector">
      <button type="button" onClick={onDecrease} disabled={quantity <= 1} className="flex h-10 w-8 items-center justify-start disabled:cursor-not-allowed disabled:opacity-30" aria-label="Decrease quantity">−</button>
      <span className="min-w-4 text-center text-sm">{quantity}</span>
      <button type="button" onClick={onIncrease} className="flex h-10 w-8 items-center justify-end" aria-label="Increase quantity">+</button>
    </div>
  );
}
