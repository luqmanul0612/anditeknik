import type { Metadata } from 'next';
import '../utils/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Andi Teknik',
  description: 'Andi Teknik - Solusi Pendingin Udara Anda',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
