import Link from 'next/link';

import { css } from '../../styled-system/css';
import { container, flex } from '../../styled-system/patterns';
import { BestSeller } from './(type)/book';
import { CustonResponse } from './(type)/common';

const API_URL = 'https://books-api.nomadcoders.workers.dev/lists';

async function getBestSellerList() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error('Failed to get bestseller list.');
  }

  return res.json() as Promise<CustonResponse<BestSeller[]>>;
}

export default async function Home() {
  const bestSellerList = await getBestSellerList();

  return (
    <main className={css({ height: 'full', mt: '-6' })}>
      <div className={css({ bg: 'body', py: '12', roundedTopLeft: '3xl', roundedTopRight: '3xl' })}>
        <div className={container()}>
          <div className={flex({ flexWrap: 'wrap', gap: '10' })}>
            {bestSellerList.results.map((bestSeller) => (
              <div
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
                key={bestSeller.display_name}
              >
                <Link href={`/list/${bestSeller.list_name}`}>{bestSeller.display_name} →</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
