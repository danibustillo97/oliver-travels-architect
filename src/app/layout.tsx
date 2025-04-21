
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';  // Ensure global styles are imported

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OLiver Travels - Plataforma de Viajes con IA',
  description: 'Plataforma inteligente de viajes que crea paquetes vacacionales personalizados con tecnología de IA',
  openGraph: {
    title: 'OLiver Travels - Plataforma de Viajes con IA',
    description: 'Plataforma inteligente de viajes que crea paquetes vacacionales personalizados con tecnología de IA',
    images: [{ url: 'https://lovable.dev/opengraph-image-p98pqg.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@oliver_travels',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
