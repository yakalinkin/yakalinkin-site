import { HTMLAttributeAnchorTarget } from 'react';
import { NavTagName } from '../nav-tag/types';

export interface Props {
  to: string;
  text: string;
  tag?: NavTagName;
  target?: HTMLAttributeAnchorTarget;
}
