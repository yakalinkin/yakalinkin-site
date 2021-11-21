import React, { FC } from 'react';
import classnames from 'classnames';

import { Tags } from '@components/tags';

import { ArticleListType } from './consts';
import { Props } from './types';

import style from './style.module.scss';

import { ArticleHeading, ArticleHeadingLevel } from '../article-heading';

export const ArticleList: FC<Props>= ({ list, title, type = ArticleListType.Unordered }) => {
  const articleListClassName = classnames({
    [style.articleList]: style.articleList,
    [style[type]]: type,
  });

  const listItemElms = list.map((item, index) => {
    if(item?.title) {
      return (
        <li key={index} className={style.articleListItem}>
          <span>{ item.title }</span>
          { item.tags && <Tags tags={item.tags} /> }
        </li>
      );
    }

    return <li key={index} className={style.articleListItem}>{ item }</li>;
  });

  return (
    <div className={style.articleListContainer}>
      { title && <ArticleHeading level={ArticleHeadingLevel.H3}>{ title }</ArticleHeading> }
      { React.createElement(type, { className: articleListClassName }, listItemElms) }
    </div>
  );
};

export {
  ArticleListType,
};
