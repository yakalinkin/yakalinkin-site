import React, { FC } from 'react';

import { Props } from './types';

import style from './style.module.scss';

export const DarkModeIcon: FC<Props> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 16 16">
      <g transform="rotate(45 8 8)">
        <defs>
          <mask id="circle">
            <rect width="100%" height="100%" fill="white"/>
            <circle className={style.darkModeIcon} r="8" cx="8" cy="8" fill="black"/>
          </mask>
        </defs>

        <circle r="8" cx="8" cy="8" mask="url(#circle)" />
      </g>
    </svg>
  );
};
