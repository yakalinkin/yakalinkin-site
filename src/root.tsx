import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';

import { useLoading } from './hooks/loading.hook';

import { SplashScreen } from './components/splash-screen';
import { Header } from './components/header';

import { loadFontGroup } from './utils/load-fonts.util';

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
      <Header />

      {/* :TODO: Hero */}
      {/* :TODO: Portfolio */}
      {/* :TODO: Footer */}

    </SplashScreen>
  );
};

export default hot(Root);
