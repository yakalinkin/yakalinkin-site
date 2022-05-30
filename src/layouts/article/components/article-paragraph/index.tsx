import React, { FC } from 'react';
import { isString } from 'lodash-es';

import { tp } from '@utils/typograf.util';

import style from './style.module.scss';

export const ArticleParagraph: FC = ({ children }) => {
  const props = {
    className: style.articleParagraph,
  };

  if (isString(children)) {
    return <>{
      children.split('\n').map((text, idx) => (
        <p key={idx} {...props}>{ tp.execute(text) }</p>
      ))
    }</>;
  }

  return <p {...props}>{ tp.execute(children) }</p>;
};
