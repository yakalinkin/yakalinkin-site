import React from 'react';

export function replaceObjects(source: Source, findValue: string, replaceValue: React.ReactElement) {
  if (React.isValidElement(source)) {
    return source;
  }

  if (typeof source === 'string') {
    const result = source.split(findValue).map((part, i) => i ? [replaceValue, part] : part);
    return result.length > 1 ? flatten(result).filter(Boolean) : result[0];
  }

  if (Array.isArray(source)) {
    const result = source.map((item) => replaceObjects(item, findValue, replaceValue));
    return flatten(result).filter(Boolean);
  }

  if (typeof source === 'object') {
    const result = {};

    for (const key in source) {
      const part = source[key];

      result[key] = replaceObjects(part, findValue, replaceValue);
    }

    return result;
  }

  return source;
}

function flatten<T>(arr: Array<T>): T[] {
  return arr.reduce(
    (prev, curr) => (
      Array.isArray(curr)
        ? prev.concat(flatten(curr))
        : prev.concat(curr)
    ),
    [] as Array<T>,
  );
}

type Source<T = string | React.ReactElement> = T | Array<T | Source> | { [key: string]: T | Source };
