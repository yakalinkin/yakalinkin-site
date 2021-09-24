import React, { FC } from 'react';

import { Navigation, NavItem, NavTagName } from '@components/navigation';
import { ThemeAction } from '@components/action';

import LogoSvg from '@svg/logo.svg';

import style from './style.module.scss';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <LogoSvg />
        </div>
        <div className={style.headerNav}>
          <Navigation>
            <NavItem
              to="#"
              text="Резюме"
              key="resume"
              tag={NavTagName.Soon}
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
