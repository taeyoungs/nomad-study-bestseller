import { css } from '../../../styled-system/css';

export default function Home() {
  return (
    <main>
      <h3 className={css({ fontFamily: 'dancing', fontSize: '4xl', fontWeight: 'light' })}>
        About
      </h3>
    </main>
  );
}
