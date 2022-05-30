import { cloneElement } from 'react';
import { reactReplace } from './react-replace';

export function reactReplaceElements(str: string, elements: Record<string, React.ReactElement>) {
  let result = str;

  for (const key in elements) {
    const elm = elements[key];
    const regex = new RegExp(`(<${key}[ ]?[/]>|<${key}>(.+?)<[/]${key}>)`, 'g');
    const find = regex.exec(str);

    if (find?.length) {
      result = reactReplace(result, find[1], cloneElement(elm, { key }, find[2]));
    }
  }

  return result;
}
