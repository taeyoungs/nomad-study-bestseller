import { css } from '../../../styled-system/css';

export default function About() {
  return (
    <section className={css({ px: '40' })}>
      <h2
        className={css({
          color: 'primary',
          fontFamily: 'dancing',
          fontSize: '5xl',
          fontWeight: 'bold',
          mb: '6',
        })}
      >
        ABOUT US
      </h2>
      <p className={css({ fontFamily: 'raleway', fontSize: 'lg', mb: '2' })}>
        Welcome to the official explorer for The New York Times Best Seller list explorer
      </p>
      <p className={css({ fontFamily: 'raleway', fontSize: 'lg' })}>We hope you enjoy your stay!</p>
    </section>
  );
}
