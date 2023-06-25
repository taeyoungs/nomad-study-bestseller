import { dacingScript, raleway } from './fonts';
import './globals.css';

export const metadata = {
  description: 'New York Times Best Seller',
  title: 'Best Seller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${raleway.variable} ${dacingScript.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
