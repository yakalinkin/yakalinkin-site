import React, { FC } from 'react';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, tag }) => {
  return (
    <li className={style.navigationItem}>

      {/* :TODO: Link component */}
      <span>{ text }</span>

      <NavTag tag={tag} />
    </li>
  );
};
