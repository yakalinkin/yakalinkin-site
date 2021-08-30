import React, { FC } from 'react';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, href, tag }) => {
  return (
    <li className={style.navigationItem}>

      {/* :TODO: Link component */}
      <a href={href} target="_blank" rel="noreferrer">{ text }<NavTag tag={tag} /></a>

    </li>
  );
};
