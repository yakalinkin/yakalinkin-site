import { ReactElement } from 'react';
import { ArticleListType } from './consts';

export type Props = {
  list: ItemElement[] | { title: string; tags?: ItemElement[] }[];
  type?: ArticleListType;
  title?: string;
}

export type ItemElement = string | [string, string] | ReactElement;
