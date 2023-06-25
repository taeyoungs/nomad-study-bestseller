import Header from '@/app/components/Header';

import { css } from '../../styled-system/css';
import { container } from '../../styled-system/patterns';
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
        <main className={css({ height: 'full', mt: '-6' })}>
          <div
            className={css({ bg: 'body', py: '12', roundedTopLeft: '3xl', roundedTopRight: '3xl' })}
          >
            <div className={container()}>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
