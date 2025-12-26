import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Max Studoliak - Frontend Developer Portfolio',
    template: '%s | Max Studoliak',
  },
  description: 'Professional portfolio of Max Studoliak - Frontend Developer specializing in React, TypeScript, and modern web technologies. View my projects and get in touch.',
  keywords: ['Max Studoliak', 'Frontend Developer', 'React', 'TypeScript', 'Next.js', 'Material-UI', 'Web Development', 'Portfolio', 'Ukraine'],
  authors: [{ name: 'Max Studoliak', url: 'mailto:studolakmaksim8@gmail.com' }],
  creator: 'Max Studoliak',
  publisher: 'Max Studoliak',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://maksim-studolak.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'uk_UA',
    url: 'https://max-studoliak.vercel.app',
    siteName: 'Max Studoliak Portfolio',
    title: 'Max Studoliak - Frontend Developer Portfolio',
    description: 'Professional portfolio showcasing my work as a Frontend Developer. Specializing in React, TypeScript, and modern web technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Max Studoliak - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Studoliak - Frontend Developer Portfolio',
    description: 'Professional portfolio showcasing my work as a Frontend Developer. Specializing in React, TypeScript, and modern web technologies.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you get it
    // yandex: 'your-yandex-verification-code', // Add when you get it
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </LanguageProvider>
      </body>
    </html>
  );
}
