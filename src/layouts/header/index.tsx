import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Routes } from '#consts';

import { Navigation, NavItem, NavTagName } from '@components/navigation';
import { ThemeAction } from '@components/action';

import LogoSvg from '@svg/logo.svg';

import style from './style.module.scss';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <NavLink
            activeClassName={style.active}
            isActive={(match, location) => (!!match?.isExact && location.pathname === Routes.HOME)}
            to={Routes.HOME}
          >
            <LogoSvg tabIndex={-1} />
          </NavLink>
        </div>
        <div className={style.headerNav}>
          <Navigation>
            <NavItem
              to="#"
              text="Портфолио"
              key="portfolio"
              tag={NavTagName.Soon}
            />
            <NavItem
              to={Routes.RESUME}
              text="Резюме"
              key="resume"
            />
          </Navigation>
        </div>
        <div className={style.headerAction}>
          {/* :TODO: <LanguageAction /> */}
          <ThemeAction />
        </div>
      </div>
    </header>
  );
};
