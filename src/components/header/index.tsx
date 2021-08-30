import React, { FC } from 'react';

import { Logo } from '@components/logo';
import { Navigation, NavItem, NavTagName } from '@components/navigation';
import { ThemeAction } from '@components/action';

import style from './style.module.scss';

export const Header: FC = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className="grid__col-sm">
          <div className={style.headerLogo}>
            <Logo />
          </div>
        </div>
        <div className="grid__col-sm">{/* empty */}</div>
        <div className="grid__col-sm m-0">
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
        </div>
        <div className="grid__col-sm">
          <div className={style.headerAction}>
            {/* :TODO: <LanguageAction /> */}
            <ThemeAction />
          </div>
        </div>
      </div>
    </header>
  );
};
