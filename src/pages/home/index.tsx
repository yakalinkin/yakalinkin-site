import React from 'react';

import { Header } from '@layouts/header';
import { Footer } from '@layouts/footer';
import { Hero } from '@layouts/hero';
import { Portfolio } from '@layouts/portfolio';

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Portfolio />
      <Footer />
    </>
  );
};
