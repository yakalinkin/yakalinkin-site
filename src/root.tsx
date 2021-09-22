import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import { loadFontGroup } from '@utils/load-fonts.util';

import { useLoading } from '@hooks/loading.hook';
import { useLocalStorage } from '@hooks/local-storage.hook';

import { SplashScreen } from '@components/splash-screen';

import { Home } from '@pages/home';
import { NotFound } from '@pages/not-found';

import styleJson from './styles/main.scss.json';
import { setHtmlDataset } from '@utils/utils';

const Root = () => {
  const [themeStorage] = useLocalStorage<string>('theme');

  const { isLoading } = useLoading(async () => {
    await loadFontGroup(styleJson.font.typefaces['primary']);
  });

  useEffect(() => {
    if (themeStorage) {
      setHtmlDataset('theme', themeStorage);
    }
  }, [themeStorage]);

  return (
    <SplashScreen isLoading={isLoading}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </SplashScreen>
  );
};

export default hot(Root);
