import React from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '@layouts/header';
import { Footer } from '@layouts/footer';
import { Hero } from '@layouts/hero';
import { Portfolio } from '@layouts/portfolio';

export const Home = () => {
  const { SITE_TITLE } = process.env;

  return (
    <>
      <Helmet>
        <title>{ SITE_TITLE }</title>
      </Helmet>
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </>
  );
};
