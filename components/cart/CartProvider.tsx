'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type CartProduct = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
};

export type CartLineItem = CartProduct & {
  quantity: number;
};

type CartContextValue = {
  items: CartLineItem[];
  totalQuantity: number;
  subtotal: number;
  addItem: (item: CartProduct) => void;
  increaseQuantity: (id: string, size: string, color: string) => void;
  decreaseQuantity: (id: string, size: string, color: string) => void;
  removeItem: (id: string, size: string, color: string) => void;
  clearCart: () => void;
};

const STORAGE_KEY = 'rrush-cart';
const CartContext = createContext<CartContextValue | undefined>(undefined);

function itemMatches(item: CartLineItem, id: string, size: string, color: string) {
  return item.id === id && item.size === size && item.color === color;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const savedCart = window.localStorage.getItem(STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart) as CartLineItem[];
        if (Array.isArray(parsedCart)) setItems(parsedCart);
      }
    } catch {
      setItems([]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const addItem = useCallback((product: CartProduct) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => itemMatches(item, product.id, product.size, product.color));

      if (existingItem) {
        return currentItems.map((item) => itemMatches(item, product.id, product.size, product.color) ? { ...item, quantity: item.quantity + 1 } : item);
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const increaseQuantity = useCallback((id: string, size: string, color: string) => {
    setItems((currentItems) => currentItems.map((item) => itemMatches(item, id, size, color) ? { ...item, quantity: item.quantity + 1 } : item));
  }, []);

  const decreaseQuantity = useCallback((id: string, size: string, color: string) => {
    setItems((currentItems) => currentItems.map((item) => {
      if (!itemMatches(item, id, size, color)) return item;
      return { ...item, quantity: Math.max(1, item.quantity - 1) };
    }));
  }, []);

  const removeItem = useCallback((id: string, size: string, color: string) => {
    setItems((currentItems) => currentItems.filter((item) => !itemMatches(item, id, size, color)));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return { items, totalQuantity, subtotal, addItem, increaseQuantity, decreaseQuantity, removeItem, clearCart };
  }, [addItem, clearCart, decreaseQuantity, increaseQuantity, items, removeItem]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
