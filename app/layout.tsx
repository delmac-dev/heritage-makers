import type {Metadata} from 'next';
import { Noto_Serif, Work_Sans } from 'next/font/google';
import './globals.css';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Heritage Motors | Drive History',
  description: 'Experience the mechanical soul of the 20th century’s most iconic automobiles.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${workSans.variable}`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
