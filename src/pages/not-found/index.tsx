import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import ArrowLeftSvg from '@svg/arrow-left.svg';

import style from './style.module.scss';

export const NotFound = () => {
  return <>
    <Helmet>
      <title>Страница не найдена</title>
    </Helmet>
    <div className={style.error}>
      <div className={style.errorContainer}>
        <h1>404</h1>
        <h2>Здесь ничего нет</h2>
        <p>Вы думали, что страница существует... <span className="nowrap">a вот и нет</span></p>
        <Link to="/"><ArrowLeftSvg />Вернуться на главную</Link>
      </div>
    </div>
  </>;
};
