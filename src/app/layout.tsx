import type { Metadata } from 'next';
import '../utils/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Andi Teknik - AC Solution Jabodetabek',
  description: 'Andi Teknik - Jasa Service AC Panggilan Profesional di Jabodetabek. Service, Cuci, Bongkar Pasang AC. Teknisi Bersertifikat, Harga Transparan, Bergaransi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
