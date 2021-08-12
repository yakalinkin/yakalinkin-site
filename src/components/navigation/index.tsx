import React, { FC } from 'react';

import style from './style.module.scss';

export const Navigation: FC = ({ children }) => {
  return (
    <nav className={style.navigation}>
      <ul className={style.navigationLinks}>
        { children }
      </ul>
    </nav>
  );
};

export * from './components/nav-item';
export * from './components/nav-tag';
