import React, { FC } from 'react';

import { focusDisplayHandler } from './utils';

import './style.scss';

export const FocusDisplay: FC = ({ children }) => {
  React.useEffect(focusDisplayHandler, []);
  return <>{ children }</>;
};
