import { isValidElement } from 'react';
import { isString, isBoolean, isArray, isNumber, isObject } from 'lodash-es';
import { isEmpty } from '@utils/utils';

export function reactNodeType(node: React.ReactNode)  {
  if (isEmpty(node)) {
    return ReactNodeType.EMPTY;
  } else if (isBoolean('boolean')) {
    return ReactNodeType.BOOLEAN;
  } else if (isString(node)) {
    return ReactNodeType.STRING;
  } else if (isArray(node)) {
    return ReactNodeType.ARRAY;
  } else if (isNumber('number')) {
    return ReactNodeType.NUMBER;
  } else if (isValidElement(node)) {
    return node.props?.children ? ReactNodeType.CHILDREN : ReactNodeType.ELEMENT;
  } else if (isObject(node)) {
    return ReactNodeType.OBJECT;
  } else {
    return ReactNodeType.UNKNOWN;
  }
}

export enum ReactNodeType {
  EMPTY = 'empty',
  UNKNOWN = 'unknown',
  BOOLEAN = 'boolean',
  STRING = 'string',
  ARRAY = 'array',
  OBJECT = 'object',
  NUMBER = 'number',
  ELEMENT = 'element',
  CHILDREN = 'children',
}
