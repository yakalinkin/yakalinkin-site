import React, { FC, useEffect, useState } from 'react';

import { useWindowSize } from '@hooks/windows-size.hook';
import styleJson from '@styles/main.scss.json';

import { CompanyList } from './components/company-list';

import ScnSoftSvg from './images/scnsoft.svg';
import StarrLinkSvg from './images/starrlink.svg';
import YandexPraktikumSvg from './images/yandex-praktikum.svg';
import TreehouseSvg from './images/treehouse.svg';

import { calculateAge } from './utils';

import style from './style.module.scss';

import { CompanyListProps } from './types';
import { CompanySlider } from './components/company-slider';

const BREAKPOINT_MD = parseInt(styleJson.grid['breakpoints']['\'md\'']);

const itemsProps: CompanyListProps = {
  className: style.companyList,
  items: [{
    id: 'scnsoft',
    className: style.companyItem,
    children: (
      <>
        <ScnSoftSvg className={style.companyImage} />
        <span className={style.companyText}>Работаю {calculateAge('2018-02-01')}</span>
      </>
    ),
  }, {
    id: 'starrlink',
    className: style.companyItem,
    children: (
      <>
        <StarrLinkSvg className={style.companyImage} />
        <span className={style.companyText}>Работаю {calculateAge('2018-02-01')}</span>
      </>
    ),
  }, {
    id: 'yandex-praktikum',
    className: style.companyItem,
    children: (
      <>
        <YandexPraktikumSvg className={style.companyImage} />
        <span className={style.companyText}>Диплом «Мидл фронтенд»</span>
      </>
    ),
  }, {
    id: 'treehouse',
    className: style.companyItem,
    children: (
      <>
        <TreehouseSvg className={style.companyImage} />
        <span className={style.companyText}>Диплом «Полный JavaScript стек»</span>
      </>
    ),
  }],
};

export const Company: FC = () => {
  const { width } = useWindowSize();
  const [isSlider, setIsSlider] = useState(false);

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
