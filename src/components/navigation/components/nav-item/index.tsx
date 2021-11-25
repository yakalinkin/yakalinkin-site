import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { isLinkEmpty, isLinkExternal } from '@utils/utils';
import { useIgnoreTabIndex } from '@hooks/ignore-tab-index.hook';

import ArrowUpRightSvg from '@svg/arrow-up-right.svg';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, tag, to, ...props }) => {
  const [ tabIndex, ignoreTabIndex ] = useIgnoreTabIndex(isLinkEmpty(to));

  const children = <span tabIndex={-1}>{ text }<NavTag tag={tag} /></span>;

  if(!isLinkEmpty(to) && isLinkExternal(to) && !props.target) props.target = '_blank';

  return (
    <li className={style.navigationItem}>
      {
        !isLinkEmpty(to) && !isLinkExternal(to)
          ? <NavLink
              className={(isActive) => {
                ignoreTabIndex(isActive);
                return style.navigationLink + ' ' + (isActive ? style.active : '');
              }}
              to={to}
              tabIndex={tabIndex}
              rel="noreferrer"
              {...props}
            >
              {children}
            </NavLink >
          : <a
              className={style.navigationLink}
              href={to}
              tabIndex={tabIndex}
              rel="noreferrer"
              {...props}
            >
              {children}{ props.target === '_blank' && <ArrowUpRightSvg /> }
            </a>
      }
    </li>
  );
};
