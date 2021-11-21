import React, { FC } from 'react';

import style from './style.module.scss';

export const ArticleLead: FC = ({ children }) => {
  return (
    <p className={ style.articleLead }>{ children }</p>
  );
};
