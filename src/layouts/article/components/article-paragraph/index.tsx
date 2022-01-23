import React, { FC } from 'react';

import style from './style.module.scss';

export const ArticleParagraph: FC = ({ children }) => {
  return <p className={ style.articleParagraph }>{ children }</p>;
};
