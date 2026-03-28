import './globals.css';
import { Tajawal, Inter } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className={`${tajawal.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-slate-900">
        {children}
      </body>
    </html>
  );
}
