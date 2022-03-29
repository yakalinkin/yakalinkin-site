import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Navigation, NavItem } from '@components/navigation';

import EyeCloseSvg from '@svg/eye-close.svg';

import CONTACTS from '@mock-data/contacts.json';

import style from './style.module.scss';

export const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerNav}>
          <Navigation>
            <NavItem
              to={CONTACTS.telegram.link}
              text={t(CONTACTS.telegram.title)}
              key="telegram"
            />
            <NavItem
              to={CONTACTS.instagram.link}
              text={t(CONTACTS.instagram.title)}
              key="instagram"
            />
            <NavItem
              to={CONTACTS.vk.link}
              text={t(CONTACTS.vk.title)}
              key="vkontakte"
            />
            <NavItem
              to={CONTACTS.github.link}
              text={t(CONTACTS.github.title)}
              key="github"
            />
            <NavItem
              to={CONTACTS.linkedin.link}
              text={t(CONTACTS.linkedin.title)}
              key="linkedin"
            />
          </Navigation>
        </div>
      </div>
      <div className={style.footerContainer}>
        <span className={style.footerInfo}><EyeCloseSvg />{t('Footer.Info')}</span>
      </div>
    </footer>
  );
};
