import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'CipAuto - 15 ani de aniversare | Câștigă un Hyundai Tucson',
  description: 'Sărbătorim 15 ani de CipAuto cu premii excepționale! Participă la campania aniversară și poți câștiga un Hyundai Tucson SUV sau alte premii valoroase. Promoție limitată - automobil cu garanție de până la 1 an.',
  keywords: 'CipAuto, aniversare 15 ani, Hyundai Tucson, câștigă mașină, concurs auto, automobile Moldova, garanție auto, tombola aniversară',
  openGraph: {
    title: 'CipAuto - 15 ani de aniversare | Câștigă un Hyundai Tucson',
    description: 'Sărbătorim 15 ani de CipAuto cu premii excepționale! Participă și poți câștiga un Hyundai Tucson SUV.',
    url: 'https://cipauto.md',
    siteName: 'CipAuto Moldova',
    images: [
      {
        url: 'https://cipauto.md/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CipAuto 15 ani - Campanie aniversară',
      },
    ],
    locale: 'ro_MD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CipAuto Moldova" />
        <link rel="canonical" href="https://cipauto.md" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
