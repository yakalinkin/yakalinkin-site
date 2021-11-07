import React, { FC } from 'react';

import { Company } from '@components/company';

import LineSvg from '@svg/line.svg';

import { getGreet } from './utils';

import style from './style.module.scss';

export const Hero: FC = () => {

  const helloText = getGreet();

  return (
    <section className={style.hero}>

      <div className={style.heroContainer}>
        <div className={style.heroCaption}>
          <h1 className="d3">{helloText}, это Ярослав. <span className="nowrap">Веб-<span className={style.heroUnderline}>разработчик<LineSvg /></span></span> из Беларуси. Разрабатываю живые сайты.</h1>
        </div>
      </div>

      <Company />

    </section>
  );
};
