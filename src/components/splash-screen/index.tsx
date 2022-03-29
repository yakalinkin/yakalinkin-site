import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import LogoSvg from '@svg/logo.svg';

import { Props } from './types';
import style from './style.module.scss';
import styleJson from './style.scss.json';

export const SplashScreen: FC<Props> = ({ isLoading, children }) => {
  const { t, ready } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  const classNames = cn(style.splashScreen, {
    [style.loading]: !isLoading,
  });

  useEffect(() => {
    let loadingTimer: NodeJS.Timeout;

    if(!isLoading) {
      loadingTimer = setTimeout(() => {
        setIsLoaded(true);
      }, styleJson.loadedDelay);
    }

    return () => clearTimeout(loadingTimer);
  }, [isLoading]);

  const splashScreenElm = (
    <div className={classNames}>
      <LogoSvg />
      <span>{ready && t('common:Loading')}</span>
    </div>
  );

  return <>
    { !isLoaded && splashScreenElm }
    { !isLoading && children }
  </>;
};
