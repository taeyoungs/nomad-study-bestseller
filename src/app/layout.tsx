import { raleway } from './fonts';
import './globals.css';

export const metadata = {
  description: 'New York Times Best Seller',
  title: 'Best Seller',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
