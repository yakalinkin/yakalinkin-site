import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { reactReplaceElements } from '@utils/react.util';
import { Company } from '@components/company';
import { Heading } from '@components/heading';

import LineSvg from '@svg/line.svg';

import { getGreetingText } from './utils';

import style from './style.module.scss';

export const Hero: FC = () => {
  const { t } = useTranslation();

  const greetingText = getGreetingText(t);
  const title = t('Hero.Title', { greetingText });

  return (
    <section className={style.hero}>

      <div className={style.heroContainer}>
        <div className={style.heroCaption}>
          <Heading level="d3">
            {
              reactReplaceElements(title, {
                nowrap: <span className="nowrap"/>,
                span: <span className={style.heroUnderline}/>,
                line: <LineSvg />,
              })
            }
          </Heading>
        </div>
      </div>

      <Company />

    </section>
  );
};
