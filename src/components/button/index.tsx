import React, { FC } from 'react';
import cn from 'classnames';

import { AnchorProps, Props } from './types';

import style from './style.module.scss';

export const Button: FC<Props> = ({ className, text, icon, onClick, ...rest }) => {
  const classNames = cn(style.button, className);
  const anchorProps = rest as AnchorProps;

  if (anchorProps.href !== undefined) {
    return (
      <a
        className={classNames}
        onClick={onClick}
        {...anchorProps}
      >
        { text }
        { icon }
      </a>
    );
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
    >
      { text }
      { icon }
    </button>
  );
};
