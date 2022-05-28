import { isEmpty } from '@utils/utils';

import { reactNodeType, ReactNodeType } from './react-node-type';

export function reactElementEmpty(node: React.ReactNode) {
  const type = reactNodeType(node);

  switch (type) {
    case ReactNodeType.ARRAY:
      return (node as React.ReactNode[]).every(reactElementEmpty);
    case ReactNodeType.CHILDREN:
      return reactElementEmpty((node as React.ReactPortal).props.children);
    case ReactNodeType.ELEMENT:
      return true;
    default:
      return isEmpty(node);
  }
}
