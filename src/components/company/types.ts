import { ReactNode } from 'react';

export type CompanyListProps = {
  className: string;
  items: CompanyItemProps[];
}

export type CompanyItemProps = {
  id: string;
  className: string;
  children: ReactNode;
}
