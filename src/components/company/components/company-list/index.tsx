import React, { FC } from 'react';

import { CompanyListProps } from '@components/company/types';

export const CompanyList: FC<CompanyListProps> = ({ items, ...props }) => {
  return (
    <div {...props}>
      {
        items.map(({ children, ...props }, idx) => (
          <div key={idx} { ...props}>{ children }</div>
        ))
      }
    </div>
  );
};
