import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { isExternal } from '@utils/utils';

import ArrowUpRightSvg from '@svg/arrow-up-right.svg';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, tag, to, ...props }) => {
  const children = <>{ text }<NavTag tag={tag} /></>;

  if(to && to !=='#' && isExternal(to) && !props.target) props.target = '_blank';

  return (
    <li className={style.navigationItem}>
      {
        to && to !=='#' && !isExternal(to)
          ? <Link className={style.navigationLink} to={to} {...props}>{children}</Link>
          : <a className={style.navigationLink} href={to} {...props}>{children}{ props.target === '_blank' && <ArrowUpRightSvg /> }</a>
      }
    </li>
  );
};
