import { Dancing_Script, Raleway } from 'next/font/google';

import './globals.css';

const raleway = Raleway({ subsets: ['latin'] });
const dacingScript = Dancing_Script({ subsets: ['latin'] });

export const metadata = {
  description: 'New York Times Best Seller',
  title: 'Best Seller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${dacingScript.className}`}>{children}</body>
    </html>
  );
}
