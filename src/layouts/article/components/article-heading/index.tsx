import React, { FC } from 'react';
import classnames from 'classnames';

import { Props } from './types';
import style from './style.module.scss';

export const ArticleHeading: FC<Props> = ({ level = 'h1', children }) => {
  const headingClassName = classnames(style.articleHeading, {
    [style[level]]: !!level,
  });
  return (
    <p className={ headingClassName }>{ children }</p>
  );
};

export * from './consts';
