import React, { FC, useEffect, useState } from 'react';
import { TFunction } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import camelCase from 'lodash/camelCase';

import { useWindowSize } from '@hooks/windows-size.hook';
import styleJson from '@styles/main.scss.json';

import { CompanyList } from './components/company-list';

import ScnSoftSvg from '@svg/scnsoft.svg';
import YandexPracticumSvg from '@svg/yandex-practicum.svg';
import TreehouseSvg from '@svg/treehouse.svg';
import HackerRankSvg from '@svg/hacker-rank.svg';

import { CompanyListProps } from './types';
import { CompanySlider } from './components/company-slider';

import style from './style.module.scss';

const BREAKPOINT_MD = parseInt(styleJson.grid['breakpoints']['md']);

const getItemsProps = (t: TFunction, i18n): CompanyListProps => ({
  className: style.companyList,
  items: [{
    id: 'scnsoft',
    className: style.companyItem,
    children: (
      <>
        <ScnSoftSvg className={style.companyImage} />
        <span className={style.companyText}>{t('CompanyDesc.Scnsoft')}</span>
      </>
    ),
  }, {
    id: 'yandex-practicum',
    className: style.companyItem,
    children: (
      <>
        <YandexPracticumSvg className={cn(style.companyImage, style[camelCase(`lng_${i18n.language}`)])} />
        <span className={style.companyText}>{t('CompanyDesc.Practicum')}</span>
      </>
    ),
  }, {
    id: 'treehouse',
    className: style.companyItem,
    children: (
      <>
        <TreehouseSvg className={style.companyImage} />
        <span className={style.companyText}>{t('CompanyDesc.Treehouse')}</span>
      </>
    ),
  }, {
    id: 'hacker-rank',
    className: style.companyItem,
    children: (
      <>
        <HackerRankSvg className={style.companyImage} />
        <span className={style.companyText}>{t('CompanyDesc.HackerRank')}</span>
      </>
    ),
  }],
});

export const Company: FC = () => {
  const { t, i18n } = useTranslation();
  const { width } = useWindowSize();
  const [isSlider, setIsSlider] = useState(false);
  const itemsProps = getItemsProps(t, i18n);

  useEffect(() => {
    if (width < BREAKPOINT_MD) {
      setIsSlider(true);
    } else {
      setIsSlider(false);
    }
  }, [width]);

  return (
    <div className={style.company}>
      <div className={style.companyContainer}>
        { isSlider ? <CompanySlider { ...itemsProps } /> : <CompanyList { ...itemsProps } />}
      </div>
    </div>
  );
};
