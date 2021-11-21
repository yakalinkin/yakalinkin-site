import React, { FC } from 'react';

import { Props } from './types';

import style from './style.module.scss';

export const Tags: FC<Props> = ({ tags }) => {
  return (
    <div className={style.tags}>
      {
        tags.map((tag, index) => (
          <span
            className={style.tagsTag}
            key={index}
          >{tag}</span>
        ))
      }
    </div>
  );
};
