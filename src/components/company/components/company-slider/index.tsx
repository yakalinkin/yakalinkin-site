import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';

import { CompanyListProps } from '@components/company/types';

SwiperCore.use([Autoplay]);

export const CompanySlider: FC<CompanyListProps> = ({ items, ...props }) => {
  const dubItems = [...items, ...items];

  return (
    <Swiper
      slidesPerView={'auto'}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      {...props}
    >
      {
        dubItems.map(({ children, ...props }, idx) => (
          <SwiperSlide key={idx} { ...props}>{ children }</SwiperSlide>
        ))
      }
    </Swiper>
  );
};
