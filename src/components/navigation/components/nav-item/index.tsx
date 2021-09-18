import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { isExternal } from '@utils/utils';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, tag, to, ...props }) => {
  const children = <>{ text }<NavTag tag={tag} /></>;

  if(!props.target) props.target = '_blank';

  return (
    <li className={style.navigationItem}>
      {
        isExternal(to)
          ? <Link to={to} {...props}>{children}</Link>
          : <a href={to} {...props}>{children}</a>
      }
    </li>
  );
};
