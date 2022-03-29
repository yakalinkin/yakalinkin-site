import React, { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { Company } from '@components/company';

import LineSvg from '@svg/line.svg';

import { getGreetingText } from './utils';

import style from './style.module.scss';

export const Hero: FC = () => {
  const { t } = useTranslation();

  const greetingText = getGreetingText(t);

  return (
    <section className={style.hero}>

      <div className={style.heroContainer}>
        <div className={style.heroCaption}>
          <h1 className="d3">
            <Trans i18nKey='Hero.Title' shouldUnescape>
              {{ greetingText }}null<span className="nowrap">null<span className={style.heroUnderline}>null<LineSvg /></span></span>null
            </Trans>
          </h1>
        </div>
      </div>

      <Company />

    </section>
  );
};
