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
              key="telegram"
              text="Телеграм"
              href="https://t.me/yakalinkin"
            />
            <NavItem
              key="instagram"
              text="Инстаграм"
              href="https://instagram.com/yakalinkin"
            />
            <NavItem
              key="vkontakte"
              text="ВКонтакте"
              href="https://vk.com/yakalinkin"
            />
            <NavItem
              key="github"
              text="Гитхаб"
              href="https://github.com/yakalinkin"
            />
            <NavItem
              key="linkedin"
              text="Линкедин"
              href="https://linkedin.com/in/yakalinkin"
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
