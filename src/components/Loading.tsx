import Image from 'next/image';

import { css, cx } from '../../styled-system/css';
import { flex } from '../../styled-system/patterns';

function Loading() {
  return (
    <div
      className={cx(
        flex({ alignItems: 'center', justifyContent: 'center' }),
        css({ h: 'full', w: 'full' })
      )}
    >
      <Image alt="loading..." height={100} src="/loading.svg" width={100} />
    </div>
  );
}

export default Loading;
