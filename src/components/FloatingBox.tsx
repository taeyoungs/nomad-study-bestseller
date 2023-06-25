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
  cursor: 'pointer',
  fontFamily: 'raleway',
  fontWeight: 'semibold',
  p: '4',
  rounded: 'md',
  transition: 'all 0.3s',
});

interface FloatingBoxProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

function FloatingBox({ children, className, href }: FloatingBoxProps) {
  const mergedClassName = cx(baseStyles, className);

  return (
    <div className={mergedClassName}>
      <Link href={href}>{children}</Link>
    </div>
  );
}

export default FloatingBox;
