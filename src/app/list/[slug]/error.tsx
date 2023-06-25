'use client';

import { useEffect } from 'react';

import { css } from '../../../../styled-system/css';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={css({ textAlign: 'center' })}>
      <h2 className={css({ fontFamily: 'raleway', fontSize: '2xl', fontWeight: 'bold', mb: '6' })}>
        Something went wrong!
      </h2>

      <button
        className={css({
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
        })}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
