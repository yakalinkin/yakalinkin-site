import React, { FC } from 'react';
import { tp } from '@utils/typograf.util';

import style from './style.module.scss';

export const ArticleLead: FC = ({ children }) => {
  return (
    <p className={ style.articleLead }>{ tp.execute(children) }</p>
  );
};
