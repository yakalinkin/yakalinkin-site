import React, { FC } from 'react';
import cn from 'classnames';

import { Heading } from '@components/heading';

import { Props } from './types';
import style from './style.module.scss';

export const ArticleHeading: FC<Props> = ({ level = 'h1', className, children }) => {
  return (
    <Heading
      className={cn(style.articleHeading, className)}
      level={level}
    >{ children }</Heading>
  );
};

export * from './types';
