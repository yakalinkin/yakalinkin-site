import { Children, cloneElement } from 'react';
import { isArray } from 'lodash-es';
import Typograf from 'typograf';

import { reactNodeType, reactNodeText, ReactNodeType, reactPrevElement, reactNextElement } from './react.util';

// :TODO: Need to test with typograf.

const typograf = new Typograf({
  locale: ['ru', 'en-US'],
});

export const tp = {
  execute: processElement,
};

function processElement(node: React.ReactNode) {
  switch (reactNodeType(node)) {
    case ReactNodeType.STRING:
      return typograf.execute(node as string);

    case ReactNodeType.ARRAY:
      return processElementList(node as React.ReactNode[]);

    case ReactNodeType.CHILDREN: {
      const _node = node as React.ReactPortal;
      return processElementList(_node.props.children, _node);
    }

    default:
      return node;
  }
}

function processElementList(nodes: React.ReactNode[], parent?: React.ReactPortal) {
  if (parent && nodes.length === 0) {
    return cloneElement(parent, { children: nodes });
  }

  if (parent && nodes.length === 1) {
    return cloneElement(parent, { children: processElement(nodes[0]) });
  }

  const result = nodes.reduce((acc, element, index, elements) => {
    const hasNext = index < elements.length - 1;
    const hasPrev = index > 0;
    const hasSpaceFirst = index === 0 && element === ' ';
    const hasSpaceLast = index === elements.length - 1 && element === ' ';

    if (hasSpaceFirst || hasSpaceLast) {
      return acc;
    } else if (isArray(acc)) {
      const type = reactNodeType(element);

      switch (type) {
        case ReactNodeType.STRING:
          acc.push(
            typografTextWithNeighbors(
              element as string,
              hasPrev && reactNodeText(reactPrevElement(elements, index)).lastWord,
              hasNext && reactNodeText(reactNextElement(elements, index)).firstWord,
            ),
          );
          break;

        case ReactNodeType.ARRAY:
          acc.push(
            processElementList(
              element as React.ReactNode[],
              element as React.ReactPortal,
            ),
          );
          break;

        case ReactNodeType.CHILDREN: {
          const _element = element as React.ReactPortal;
          acc.push(
            processElementList(
              Children.toArray(_element.props.children),
              _element,
            ),
          );
          break;
        }

        default:
          acc.push(element);
          break;
      }
    }

    return acc;
  }, []);

  if(parent) {
    return cloneElement(parent, { children: result });
  }

  return result;
}

function typografTextWithNeighbors(node: string, prevWord?: string, nextWord?: string): string {
  const words: string[] = [];

  if (prevWord) words.push(reactNodeText(prevWord).lastWord);

  words.push(node);

  if (nextWord) words.push(reactNodeText(nextWord).firstWord);

  let typografed = typograf.execute(words.join(''));

  if (prevWord) {
    let word = reactNodeText(prevWord).lastWord;
    word =  typograf.execute(word);
    const wordIndex = typografed.indexOf(word);
    typografed = typografed.substring(wordIndex + word.length, typografed.length);
  }

  if (nextWord) {
    let word = reactNodeText(nextWord).firstWord;
    word =  typograf.execute(word);
    const wordIndex = typografed.indexOf(word);
    typografed = typografed.substring(0, wordIndex);
  }

  return typografed;
}
