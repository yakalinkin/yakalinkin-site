import React, { FC } from 'react';
import cn from 'classnames';

import { tp } from '@utils/typograf.util';

import { Props, SupProps } from './types';

import style from './style.module.scss';

export const ArticleQuote: FC<Props> = ({ children, author, info }) => {
  const showSup = !!(author || info);

  return (
    <div className={style.articleQuote}>
      <blockquote className={style.articleQuoteTitle}>
        <Sup show={showSup}>{ tp.execute(children) }</Sup>
      </blockquote>
      <div className={style.articleQuoteRow}>
        <Sup show={showSup} />
        <div className={style.articleQuoteColumn}>
          { author && <span className={style.articleQuoteAuthor}>{ author }</span> }
          { info && <span className={style.articleQuoteInfo}>{ tp.execute(info) }</span> }
        </div>
      </div>
    </div>
  );
};

function Sup({ children, show = true }: SupProps) {
  return (
    <span className={cn(style.articleQuoteSup, {
      [style.articleQuoteSupShow]: show,
    })}>{ children }</span>
  );
}
