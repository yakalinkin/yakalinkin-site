import React, { FC } from 'react';
import cn from 'classnames';

import { Image } from '@components/image';

import { Props } from './types';

import style from './style.module.scss';

export const ArticleAside: FC<Props> = ({ className, src, srcSet, text, children }) => {
  return (
    <aside className={cn(style.articleAside, className)}>
      { src && (
        <div className={style.articleAsideImage}>
          <Image srcSet={srcSet} src={src} />
        </div>
      )}
      <div className={style.articleAsideText}>
        <span>{ text }</span>
      </div>
      { children}
    </aside>
  );
};
