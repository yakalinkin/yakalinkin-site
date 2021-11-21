import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { isExternal } from '@utils/utils';

import ArrowUpRightSvg from '@svg/arrow-up-right.svg';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, tag, to, ...props }) => {
  const children = <span tabIndex={-1}>{ text }<NavTag tag={tag} /></span>;

  if(to && to !=='#' && isExternal(to) && !props.target) props.target = '_blank';

  return (
    <li className={style.navigationItem}>
      {
        to && to !=='#' && !isExternal(to)
          ? <NavLink className={style.navigationLink} activeClassName={style.active} to={to} {...props} tabIndex={0} rel="noreferrer">{children}</NavLink >
          : <a className={style.navigationLink} href={to} {...props} tabIndex={0} rel="noreferrer">{children}{ props.target === '_blank' && <ArrowUpRightSvg /> }</a>
      }
    </li>
  );
};
