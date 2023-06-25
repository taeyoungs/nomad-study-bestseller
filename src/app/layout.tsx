import Header from '@/app/components/Header';

import { css } from '../../styled-system/css';
import { dacingScript, raleway } from './fonts';
import './globals.css';

export const metadata = {
  description: 'New York Times Best Seller',
  title: 'Best Seller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${raleway.variable} ${dacingScript.variable}`} lang="en">
      <body className={css({ bg: 'body', minH: '100vh' })}>
        <Header />
        {children}
      </body>
    </html>
  );
}
