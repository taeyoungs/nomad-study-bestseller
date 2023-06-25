import Link from 'next/link';

import { css, cx } from '../../styled-system/css';

const baseStyles = css({
  _hover: {
    boxShadow: 'sinking',
    transform: 'translate(5px, 5px)',
  },
  bg: 'tertiary',
  boxShadow: 'float',
  color: 'primary',
  fontFamily: 'raleway',
  fontWeight: 'semibold',
  p: '4',
  rounded: 'md',
  transition: 'all 0.3s',
});

interface FloatingBoxProps {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  href: string;
}

function FloatingBox({ children, className, external = false, href }: FloatingBoxProps) {
  const mergedClassName = cx(baseStyles, className);

  return external ? (
    <Link href={href} rel="noreferrer" target="_blank">
      <div className={mergedClassName}>{children}</div>
    </Link>
  ) : (
    <Link href={href}>
      <div className={mergedClassName}>{children}</div>
    </Link>
  );
}

export default FloatingBox;
