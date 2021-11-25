import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { Routes } from '#consts';

import { useIgnoreTabIndex } from '@hooks/ignore-tab-index.hook';
import { Navigation, NavItem, NavTagName } from '@components/navigation';
import { ThemeAction } from '@components/action';

import LogoSvg from '@svg/logo.svg';

import style from './style.module.scss';

export const Header: FC = () => {
  const [ logoTabIndex, ignoreLogoTabIndex ] = useIgnoreTabIndex();

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <NavLink
            className={(isActive) => {
              ignoreLogoTabIndex(isActive);
              return isActive ? style.active : '';
            }}
            isActive={(match, location) => (!!match?.isExact && location.pathname === Routes.HOME)}
            to={Routes.HOME}
            tabIndex={logoTabIndex}
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
