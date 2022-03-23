import React, { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { Path } from '#consts';

import { Navigation, NavItem, NavTagName } from '@components/navigation';
import { ThemeAction } from '@components/action';
import { Focusable } from '@components/focusable';

import LogoSvg from '@svg/logo.svg';

import style from './style.module.scss';

export const Header: FC = () => {
  const [isLogoActive, setIsLogoActive] = useState(false);
  const [logoDisabled, setLogoDisabled] = useState(false);
  const location = useLocation();

  const navLinkClassNames = cn({
    [style.active]: isLogoActive,
  });

  useEffect(() => {
    setIsLogoActive(location.pathname === Path.HOME);
  }, [location.pathname]);

  useEffect(() => {
    setLogoDisabled(isLogoActive);
  }, [isLogoActive]);

  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <Focusable disabled={logoDisabled}>
            <NavLink
              className={navLinkClassNames}
              to={Path.HOME}
            >
              <LogoSvg className={style.logoXmas} />
            </NavLink>
          </Focusable>
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
              to={Path.RESUME}
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
