import React, { FC } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CompanyListProps } from '@components/company/types';

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
      modules={[Autoplay]}

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
