import { MouseEventHandler, ReactNode } from 'react';

export type Props = {
  className?: string;
  text?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
} & AnchorProps;

export type AnchorProps = {
  href?: string;
  download?: boolean;
}
