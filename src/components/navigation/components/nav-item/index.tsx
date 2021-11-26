import React, { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { isLinkEmpty, isLinkExternal } from '@utils/utils';
import { Focusable } from '@components/focusable';

import ArrowUpRightSvg from '@svg/arrow-up-right.svg';

import { NavTag } from '../nav-tag';

import { Props } from './types';

import style from './style.module.scss';

export const NavItem: FC<Props> = ({ text, tag, to, ...props }) => {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(isLinkEmpty(to));
  const location = useLocation();

  const classNames = classnames(style.navigationLink, {
    [style.active]: active,
  });

  const children = <>{ text }<NavTag tag={tag} /></>;

  useEffect(() => {
    setActive(location.pathname === to);
  }, [to, location.pathname]);

  useEffect(() => {
    !isLinkEmpty(to) && setDisabled(active);
  }, [to, active]);

  if(!isLinkEmpty(to) && isLinkExternal(to) && !props.target) props.target = '_blank';

  return (
    <li className={style.navigationItem}>
      <Focusable disabled={disabled}>
        {
          !isLinkEmpty(to) && !isLinkExternal(to)
            ? <NavLink
                className={classNames}
                to={to}
                rel="noreferrer"
                {...props}
              >
                { children }
              </NavLink >
            : <a
                className={style.navigationLink}
                href={to}
                rel="noreferrer"
                {...props}
              >
                { children }{ props.target === '_blank' && <ArrowUpRightSvg /> }
              </a>
        }
      </Focusable>
    </li>
  );
};
