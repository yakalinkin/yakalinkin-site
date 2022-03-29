import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '@layouts/header';
import { Footer } from '@layouts/footer';
import { Hero } from '@layouts/hero';
import { Portfolio } from '@layouts/portfolio';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('HeadTitle.Home')}</title>
      </Helmet>
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </>
  );
};
