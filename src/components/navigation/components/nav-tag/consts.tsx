import { TFunction } from 'react-i18next';

import { NavTagName } from './types';

export const getTagData = (t: TFunction) => ({
  [NavTagName.Soon]: {
    text: t('Navigation.Tag.Soon'),
  },
  [NavTagName.InProgress]: {
    text: t('Navigation.Tag.InProgress'),
  },
});
