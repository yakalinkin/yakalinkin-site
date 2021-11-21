import React, { FC } from 'react';

import style from './style.module.scss';

export const ArticleAsideGroup: FC = ({ children }) => {
  return (
    <div className={ style.articleAsideGroup }>{ children }</div>
  );
};
