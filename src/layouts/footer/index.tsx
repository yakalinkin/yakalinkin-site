import React, { FC } from 'react';

import { Navigation, NavItem } from '@components/navigation';

import EyeCloseSvg from '@svg/eye-close.svg';

import CONTACTS from '@mock-data/contacts.json';

import style from './style.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerNav}>
          <Navigation>
            <NavItem
              to={CONTACTS.telegram.link}
              text={CONTACTS.telegram.title}
              key="telegram"
            />
            <NavItem
              to={CONTACTS.instagram.link}
              text={CONTACTS.instagram.title}
              key="instagram"
            />
            <NavItem
              to={CONTACTS.vk.link}
              text={CONTACTS.vk.title}
              key="vkontakte"
            />
            <NavItem
              to={CONTACTS.github.link}
              text={CONTACTS.github.title}
              key="github"
            />
            <NavItem
              to={CONTACTS.linkedin.link}
              text={CONTACTS.linkedin.title}
              key="linkedin"
            />
          </Navigation>
        </div>
      </div>
      <div className={style.footerContainer}>
        <span className={style.footerInfo}><EyeCloseSvg />Не отслеживаю. Хорошего настроения!</span>
      </div>
    </footer>
  );
};
