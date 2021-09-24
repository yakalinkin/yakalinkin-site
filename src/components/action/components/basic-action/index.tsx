import React, { FC } from 'react';

import { Props } from './types';

import style from './style.module.scss';

export const BasicAction: FC<Props> = ({ onClick, children }) => {
  return (
    <div
      className={style.action}
      onClick={onClick}
    >
      { children }
    </div>
  );
};
