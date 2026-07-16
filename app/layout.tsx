import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { CartProvider } from '@/components/cart/CartProvider';

export const metadata: Metadata = {
  title: 'RRUSH — Heavyweight Hoodie',
  description: 'RRUSH heavyweight essentials designed for everyday permanence.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
