import React, { FC } from 'react';

import style from './style.module.scss';

export const Article: FC = ({ children }) => {
  return (
    <article className={style.article}>
      <div className={style.articleContainer}>{children}</div>
    </article>
  );
};

export * from './components/article-header';
export * from './components/article-list';
export * from './components/article-quote';
export * from './components/article-aside-group';
export * from './components/article-aside';
export * from './components/article-lead';
export * from './components/article-paragraph';
export * from './components/article-heading';
