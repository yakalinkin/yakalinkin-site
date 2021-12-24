import React, { FC } from 'react';

import { Image } from '@components/image';

import style from './style.module.scss';

export const ComingSoon: FC = () => {
  return (
    <div className={style.comingSoon}>
      <div className={style.comingSoonInner}>
        <Image
          className={style.comingSoonImage}
          src={`${process.env.PUBLIC_URL}/images/portfolio.jpg`}
        />
        <span className={style.comingSoonSubheading}>Портфолио в процессе</span>
        <span className={style.comingSoonHeading}>скоро будет</span>
      </div>
    </div>
  );
};
