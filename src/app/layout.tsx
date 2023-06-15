import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'GitHub Repositories Explorer  |  Sulthon Abdul Malik ',
  description: 'Website to show off my porofolio',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ position: 'relative', top: '60px' }}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
