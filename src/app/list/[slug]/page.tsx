import { BestSellerByCategory } from '@/app/(type)/book';
import { CustomResponse } from '@/app/(type)/common';
import { FloatingBox } from '@/components';
import Image from 'next/image';

import { css, cx } from '../../../../styled-system/css';
import { flex, grid } from '../../../../styled-system/patterns';

const BASE_API_URL = ' https://books-api.nomadcoders.workers.dev/list';

async function getBestSellerListByCategory(category: string) {
  const params = new URLSearchParams({ name: category });
  const url = new URL(`${BASE_API_URL}?${params.toString()}`);

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to get bestseller list.');
  }

  return res.json() as Promise<CustomResponse<BestSellerByCategory>>;
}

async function Page({ params }: { params: { slug: string } }) {
  const bestSellerList = await getBestSellerListByCategory(params.slug);

  return (
    <section>
      <h2
        className={css({
          color: 'primary',
          fontFamily: 'dancing',
          fontSize: '4xl',
          fontWeight: 'semibold',
          mb: '16',
          textAlign: 'center',
        })}
      >
        {bestSellerList.results?.list_name} Books
      </h2>
      <div className={grid({ columns: 5, gap: '10' })}>
        {bestSellerList.results?.books.map((book) => (
          <div
            className={cx(
              css({
                bg: 'secondary',
                height: 'lg',
                p: '6',
                rounded: 'xl',
                shadow: 'sinking',
              }),
              flex({ direction: 'column', justifyContent: 'space-between' })
            )}
            key={book.title}
          >
            <figure className={css({ mb: '6' })}>
              <div
                className={css({
                  borderColor: 'primary',
                  borderWidth: 2,
                  height: '64',
                  mb: '3',
                  position: 'relative',
                  width: 'full',
                })}
              >
                <Image
                  alt={book.title}
                  blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMcHKqBwADEwFVKUbjdAAAAABJRU5ErkJggg=="
                  fill
                  sizes="100vw"
                  src={book.book_image}
                />
              </div>
              <figcaption>
                <h3
                  className={css({
                    fontFamily: 'raleway',
                    fontSize: 'xl',
                    fontWeight: 'bold',
                    letterSpacing: 'tight',
                    lineHeight: 'tight',
                    mb: '1',
                  })}
                >
                  {book.title}
                </h3>
                <h4
                  className={css({
                    fontFamily: 'raleway',
                    fontSize: 'sm',
                    fontWeight: 'light',
                    letterSpacing: 'tight',
                    lineHeight: 'tight',
                  })}
                >
                  {book.author}
                </h4>
              </figcaption>
            </figure>
            <FloatingBox external href={book.amazon_product_url}>
              Buy Now →
            </FloatingBox>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
