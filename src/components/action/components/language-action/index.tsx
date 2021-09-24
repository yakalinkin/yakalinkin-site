import React, { FC } from 'react';

import { BasicAction } from '../basic-action';

import style from './style.module.scss';

export const LanguageAction: FC = () => {
  const handleClick = () => {
    console.log('LanguageAction');
  };

  return (
    <BasicAction onClick={handleClick}>
      <span className={style.languageAction}>en</span>
    </BasicAction>
  );
};
