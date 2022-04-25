import React, { FC } from 'react';
import cn from 'classnames';

import { Tags } from '@components/tags';

import { ArticleListType } from './consts';
import { Props } from './types';

import style from './style.module.scss';

import { ArticleHeading, ArticleHeadingLevel } from '../article-heading';

export const ArticleList: FC<Props>= ({ list, title, type = ArticleListType.Unordered }) => {
  const articleListClassNames = cn({
    [style.articleList]: style.articleList,
    [style[type]]: type,
  });

  const listItemElms = list.map((item, index) => {
    if(item?.title) {
      return (
        <li key={index} className={style.articleListItem}>
          <span className={style.articleListText}>{ item.title }</span>
          { item.tags && <Tags tags={item.tags} /> }
        </li>
      );
    }

    if (Array.isArray(item)) {
      return (
        <li key={index} className={style.articleListItem}>
          <span className={style.articleListText}>{ item[0] }</span>
          { item[1] && <span className={style.articleListSubText}>{ item[1] }</span> }
        </li>
      );
    }

    return <li key={index} className={style.articleListItem}>{ item }</li>;
  });

  return (
    <div className={style.articleListContainer}>
      { title && <ArticleHeading level={ArticleHeadingLevel.H3}>{ title }</ArticleHeading> }
      { React.createElement(type, { className: articleListClassNames }, listItemElms) }
    </div>
  );
};

export {
  ArticleListType,
};
