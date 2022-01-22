import React, { FC, useState } from 'react';
import cn from 'classnames';

import { isLinkExternal } from '@utils/utils';

import NoImageSvg from '@svg/no-image.svg';

import { Props } from './types';

import style from './style.module.scss';

export const Image: FC<Props> = ({
  className,
  src,
  srcSet,
  alt,
  loading = 'lazy',
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnloaded, setIsUnloaded] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setIsUnloaded(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setIsUnloaded(true);
  };

  if(!isLinkExternal(src)) {
    src = `${process.env.PUBLIC_URL}${src}`;
  }

  if(srcSet && !isLinkExternal(srcSet)) {
    srcSet = srcSet.split(',').map((item) => {
      const [src, size] = item.trim().split(' ');
      return `${process.env.PUBLIC_URL}${src} ${size}`;
    }).join(', ');
  }

  const imageUnloadedEl =  (
    !isLoading && isUnloaded ? <div className={style.imageUnloaded}><NoImageSvg /></div> : null
  );

  const imageEl = (
    <img
      className={style.imageImg}
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
    />
  );

  return (
    <>
      <div
        className={cn(style.image, className, {
          [style.loading]: isLoading,
        })}
      >
        { imageUnloadedEl }
        { imageEl }
      </div>
    </>
  );
};
