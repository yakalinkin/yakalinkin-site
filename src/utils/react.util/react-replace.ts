import { cloneElement } from 'react';
import { flatten } from 'lodash-es';

import { reactNodeType, ReactNodeType } from './react-node-type';

export function reactReplace(source: Source, find: string, replace: React.ReactElement) {
  const type = reactNodeType(source);

  switch(type) {
    case ReactNodeType.STRING: {
      const _source = source as string;
      const result = _source.split(find).map((part, i) => i ? [replace, part] : part);
      return result.length > 1 ? flatten(result).filter(Boolean) : result[0];
    }

    case ReactNodeType.ARRAY: {
      const _source = source as React.ReactElement[];
      const result = _source.map((item) => reactReplace(item, find, replace));
      return flatten(result).filter(Boolean);
    }

    case ReactNodeType.OBJECT: {
      const _source = source as Record<string, React.ReactElement>;
      return Object.entries(_source).reduce((acc, [key, part]) => {
        acc[key] = reactReplace(part, find, replace);
        return acc;
      }, {} as (typeof source));
    }

    case ReactNodeType.CHILDREN: {
      const _source = source as React.ReactPortal;
      const result = reactReplace(_source.props.children, find, replace);
      return cloneElement(_source, { children: result });
    }

    default:
      return source;
  }
}

type Source<T = string | React.ReactElement> = T | Array<T | Source> | { [key: string]: T | Source };
