import React, { FC } from 'react';

import { ComingSoon } from './components/coming-soon';

import style from './style.module.scss';

export const Portfolio: FC = () => {
  return (
    <div className={style.portfolio}>
      <div className={style.portfolioContainer}>
        <ComingSoon />
      </div>
    </div>
  );
};
