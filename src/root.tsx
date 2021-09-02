import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import { loadFontGroup } from '@utils/load-fonts.util';

import { useLoading } from '@hooks/loading.hook';

import { SplashScreen } from '@components/splash-screen';

import { Home } from '@pages/home';

import styleJson from './styles/main.scss.json';

const Root = () => {
  const { isLoading } = useLoading(async () => {
    await loadFontGroup(styleJson.font.typefaces['primary']);
  });

  useEffect(() => {
    document.title = 'Root';
  }, []);

  return (
    <SplashScreen isLoading={isLoading}>
      <Home />
    </SplashScreen>
  );
};

export default hot(Root);
