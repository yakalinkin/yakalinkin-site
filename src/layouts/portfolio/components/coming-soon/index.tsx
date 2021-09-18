import React, { FC } from 'react';

import style from './style.module.scss';

export const ComingSoon: FC = () => {
  return (
    <div className={style.comingSoon}>
      <div className={style.comingSoonInner}>
        <span className={style.comingSoonSubheading}>Портфолио в процессе</span>
        <span className={style.comingSoonHeading}>скоро будут</span>
      </div>
    </div>
  );
};
