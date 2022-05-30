import { HeadingLevel } from './consts';

export type HeadingLevelType = typeof HeadingLevel[keyof typeof HeadingLevel]

export type Props = {
  className?: string;
  level?: HeadingLevelType;
}
