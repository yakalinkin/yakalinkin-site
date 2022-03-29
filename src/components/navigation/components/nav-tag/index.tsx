import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { NavTagName, Props } from './types';
import { getTagData } from './consts';

import style from './style.module.scss';

export const NavTag: FC<Props> = ({ tag = '' }) => {
  const { t } = useTranslation();
  const tagData = getTagData(t);

  const classNames = cn(style.navigationTag, {
    [style[tag]]: !!tag,
  });

  return tag ? <span className={classNames}>{ tagData[tag].text }</span> : null;
};

export {
  NavTagName,
};
