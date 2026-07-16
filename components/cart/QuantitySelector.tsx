'use client';

export function QuantitySelector({ quantity, onDecrease, onIncrease }: { quantity: number; onDecrease: () => void; onIncrease: () => void }) {
  return (
    <div className="flex items-center gap-[clamp(1rem,1.5vw,1.4rem)] text-[clamp(0.95rem,1vw,1.1rem)]" aria-label="Quantity selector">
      <button type="button" onClick={onDecrease} disabled={quantity <= 1} className="flex h-11 w-9 items-center justify-start disabled:cursor-not-allowed disabled:opacity-30" aria-label="Decrease quantity">−</button>
      <span className="min-w-4 text-center text-[clamp(0.82rem,0.82vw,0.95rem)]">{quantity}</span>
      <button type="button" onClick={onIncrease} className="flex h-11 w-9 items-center justify-end" aria-label="Increase quantity">+</button>
    </div>
  );
}
