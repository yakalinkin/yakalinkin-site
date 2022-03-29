import React, { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { BasicAction } from '../basic-action';

import style from './style.module.scss';

export const LanguageAction: FC = () => {
  const { i18n } = useTranslation();
  const getNextLanguage = useCallback(() => i18n.language === 'en' ? 'ru' : 'en', [i18n.language]);

  const handleClick = () => {
    i18n.changeLanguage(getNextLanguage());
  };

  return (
    <BasicAction onClick={handleClick}>
      <span className={style.languageAction}>{getNextLanguage()}</span>
    </BasicAction>
  );
};
