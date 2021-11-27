import React, { FC, useEffect, useRef } from 'react';
import classnames from 'classnames';

import { useIgnoreTabIndex } from '@hooks/ignore-tab-index.hook';

import { Props } from './types';
import { setTabIndexInNodes } from './utils';

import style from './style.module.scss';

export const Focusable: FC<Props> = ({ className, disabled, children }) => {
  const [ tabIndex, ignoreTabIndex ] = useIgnoreTabIndex(disabled);
  const focusableEl = useRef<HTMLDivElement>(null);

  const classNames = classnames(style.focusable, className);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const element = event.currentTarget.children[0] as HTMLElement;
      element.click();
    }
  };

  useEffect(() => {
    if (focusableEl.current) {
      setTabIndexInNodes(focusableEl.current.childNodes, -1);
    }
  }, []);

  useEffect(() => {
    if (disabled !== undefined) {
      ignoreTabIndex(disabled);
    }
  }, [disabled, ignoreTabIndex]);

  return (
    <div
      ref={focusableEl}
      className={classNames}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex}
    >
      { children }
    </div>
  );
};



