import React, { FC } from 'react';

import { Navigation, NavItem } from '@components/navigation';

import EyeCloseSvg from '@svg/eye-close.svg';

import style from './style.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerNav}>
          <Navigation>
            <NavItem
              to="https://t.me/yakalinkin"
              text="Телеграм"
              key="telegram"
            />
            <NavItem
              to="https://instagram.com/yakalinkin"
              text="Инстаграм"
              key="instagram"
            />
            <NavItem
              to="https://vk.com/yakalinkin"
              text="ВКонтакте"
              key="vkontakte"
            />
            <NavItem
              to="https://github.com/yakalinkin"
              text="Гитхаб"
              key="github"
            />
            <NavItem
              to="https://linkedin.com/in/yakalinkin"
              text="Линкедин"
              key="linkedin"
            />
          </Navigation>
        </div>
      </div>
      <div className={style.footerContainer}>
        <span className={style.footerInfo}><EyeCloseSvg /> Не отслеживаю. Хорошего настроения!</span>
      </div>
    </footer>
  );
};
