import React, { FC } from 'react';

import { Focusable } from '@components/focusable';

import { Props } from './types';

import style from './style.module.scss';

export const BasicAction: FC<Props> = ({ onClick, children }) => {
  return (
    <Focusable>
      <div
        className={style.action}
        onClick={onClick}
      >
        { children }
      </div>
    </Focusable>
  );
};
