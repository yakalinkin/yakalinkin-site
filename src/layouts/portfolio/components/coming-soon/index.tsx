import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Image } from '@components/image';

import style from './style.module.scss';

export const ComingSoon: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={style.comingSoon}>
      <div className={style.comingSoonInner}>
        <Image
          className={style.comingSoonImage}
          src={`${process.env.PUBLIC_URL}/images/portfolio.jpg`}
        />
        <span className={style.comingSoonSubheading}>{t('Portfolio.SubTitle')}</span>
        <span className={style.comingSoonHeading}>{t('Portfolio.Title')}</span>
      </div>
    </div>
  );
};
