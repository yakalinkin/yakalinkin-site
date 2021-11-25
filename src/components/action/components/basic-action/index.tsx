import React, { FC } from 'react';

import { Props } from './types';

import style from './style.module.scss';

export const BasicAction: FC<Props> = ({ onClick, children }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <div
      className={style.action}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      { children }
    </div>
  );
};
