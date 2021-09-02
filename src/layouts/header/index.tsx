import React, { FC } from 'react';

import { Logo } from '@components/logo';
import { Navigation, NavItem, NavTagName } from '@components/navigation';
import { ThemeAction } from '@components/action';

import style from './style.module.scss';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <Logo />
        </div>
        <div className={style.headerNav}>
          <Navigation>
            {/* <NavItem
              key="portfolio"
              text="Портфолио"
              tag={NavTagName.Soon}
            /> */}
            <NavItem
              key="resume"
              text="Резюме"
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
