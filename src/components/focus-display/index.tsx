import React, { FC, useEffect } from 'react';

import { focusDisplayHandler } from './utils';

import './style.scss';

export const FocusDisplay: FC = ({ children }) => {
  useEffect(focusDisplayHandler, []);
  return <>{ children }</>;
};
