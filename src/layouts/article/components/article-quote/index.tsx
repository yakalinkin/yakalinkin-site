import React, { FC } from 'react';

import style from './style.module.scss';

export const ArticleQuote: FC = ({ children }) => {
  return (
    <p className={ style.articleQuote }>{ children }</p>
  );
};
