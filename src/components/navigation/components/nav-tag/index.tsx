import React, { FC } from 'react';
import classnames from 'classnames';

import { NavTagName, Props } from './types';
import { tagData } from './consts';

import style from './style.module.scss';

export const NavTag: FC<Props> = ({ tag = '' }) => {
  const className = classnames({
    [style.navigationTag]: true,
    [style[tag]]: !!tag,
  });
  return tag ? <span className={className}>{ tagData[tag].text }</span> : null;
};

export {
  NavTagName,
};
