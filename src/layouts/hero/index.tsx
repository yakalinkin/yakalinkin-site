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
          <h1 className="h0">{helloText}, это Ярослав. Глухой <span className="nowrap">веб-<span className={style.heroUnderline}>программист<LineSvg /></span></span> из Беларуси. Создаю сайты, которые помогают людям.</h1>
        </div>
      </div>

      <Company />

    </section>
  );
};
