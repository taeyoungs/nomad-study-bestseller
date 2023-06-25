'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

const NAV_LINKS = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className={css({ bg: 'header', p: '10', textAlign: 'center' })}>
      <h1 className={css({ color: 'primary', fontFamily: 'dancing', fontSize: '5xl' })}>
        New York Times Best Seller Explorer
      </h1>
      <nav className={css({ mb: '16', mt: '4' })}>
        <ul className={flex({ align: 'center', gap: '6', justifyContent: 'center' })}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li
                className={css({
                  _hover: { fontWeight: 'bold' },
                  borderBottomWidth: isActive ? '2px' : '0',
                  color: 'primary',
                  fontFamily: 'raleway',
                  fontSize: 'xl',
                  fontWeight: isActive ? 'bold' : 'light',
                  pb: '0.5',
                })}
                key={link.name}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
