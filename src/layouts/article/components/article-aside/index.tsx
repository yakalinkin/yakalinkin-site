import React, { FC } from 'react';

import { Props } from './types';

import style from './style.module.scss';

export const ArticleAside: FC<Props> = ({ jpgName, text, children }) => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <aside className={style.articleAside}>
      <div className={style.articleAsideImage}>

        {/* :TODO: Lazyload */}
        <img
          srcSet={`${publicUrl}/images/${jpgName}.jpg 1x, ${publicUrl}/images/${jpgName}@2x.jpg 2x`}
          src={`${publicUrl}/images/${jpgName}.jpg`}
        />

      </div>
      <div className={style.articleAsideText}>
        <span>{ text }</span>
      </div>
      { children}
    </aside>
  );
};
