import React, { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import LogoSvg from '@svg/logo.svg';

import { Props } from './types';
import style from './style.module.scss';
import styleJson from './style.scss.json';

export const SplashScreen: FC<Props> = ({ isLoading, children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const className = cn({
    [style.splashScreen]: true,
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
    <div className={className}>
      <LogoSvg />
      <span>Загружаю</span>
    </div>
  );

  return <>
    { !isLoaded && splashScreenElm }
    { !isLoading && children }
  </>;
};
