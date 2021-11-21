import React, { FC } from 'react';

import style from './style.module.scss';

export const ArticleHeader: FC = ({ children }) => {
  return (
    <div className={ style.articleHeader }>
      <h1 className="d3">{ children }</h1>
    </div>
  );
};
