import { createElement, FC } from 'react';
import cn from 'classnames';

import { tp } from '@utils/typograf.util';

import { Props } from './types';
import style from './style.module.scss';

const regex = new RegExp('^h[1-6]$');

export const Heading: FC<Props> = ({ level = 'h1', className, children }) => {
  const isHeading = regex.test(level);
  const tag = isHeading ? level : 'h1';
  const props = {
    className: cn(style.heading, className, {
      [level]: !!level,
    }),
  };

  return createElement(tag, props, tp.execute(children));
};

export * from './consts';
export * from './types';
