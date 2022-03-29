import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { loadFontGroup } from '@utils/load-fonts.util';

import { useLoading } from '@hooks/loading.hook';
import { useLocalStorage } from '@hooks/local-storage.hook';

import { SplashScreen } from '@components/splash-screen';
import { FocusDisplay } from '@components/focus-display';

import { Home } from '@pages/home';
import { Resume } from '@pages/resume';

import { NotFound } from '@pages/not-found';

import { setHtmlDataset } from '@utils/utils';
import { googleFontsData } from '@utils/google-fonts.util';
import { defaultSiteTitle } from '@utils/env.util';

import { Path } from './consts';

const googleFonts = googleFontsData();

const Root = () => {
  const { ready: i18nIsReady } = useTranslation();
  const [themeStorage] = useLocalStorage<string>('theme');
  const loadingCallback = useCallback(async () => {
    for (const font of googleFonts) {
      await loadFontGroup(font);
    }
  }, []);
  const { isLoading } = useLoading(loadingCallback);

  useEffect(() => {
    if (themeStorage) {
      setHtmlDataset('theme', themeStorage);
    }
  }, [themeStorage]);

  return (
   <>
    <Helmet>
      <title>{defaultSiteTitle}</title>
    </Helmet>
    <FocusDisplay>
      <SplashScreen isLoading={!i18nIsReady || isLoading}>
        <Routes>
          <Route path={Path.HOME} element={<Home />} />
          <Route path={Path.RESUME} element={<Resume />} />
          <Route element={<NotFound />} />
        </Routes>
      </SplashScreen>
    </FocusDisplay>
   </>
  );
};

export default hot(Root);
