import React, { FC } from 'react';
import cn from 'classnames';

import { Props } from './types';
import style from './style.module.scss';

export const ArticleHeading: FC<Props> = ({ level = 'h1', children }) => {
  const headingClassNames = cn(style.articleHeading, {
    [style[level]]: !!level,
  });
  return (
    <p className={headingClassNames}>{ children }</p>
  );
};

export * from './consts';
