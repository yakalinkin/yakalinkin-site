import React, { FC } from 'react';

import { BasicAction } from '../basic-action';

import { useTheme } from './hooks/theme.hook';
import { DarkModeIcon } from './components/dark-mode-icon';

import style from './style.module.scss';

export const ThemeAction: FC = () => {
  const { nextTheme } = useTheme();

  return (
    <BasicAction onClick={nextTheme}>
      <DarkModeIcon className={style.themeAction} />
    </BasicAction>
  );
};
