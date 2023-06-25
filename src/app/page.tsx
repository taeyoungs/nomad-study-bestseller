import { FloatingBox } from '@/components';

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
              <FloatingBox href={`/list/${bestSeller.list_name}`} key={bestSeller.display_name}>
                {bestSeller.display_name} →
              </FloatingBox>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
