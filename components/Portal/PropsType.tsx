import { MouseEvent, ReactNode } from 'react';
export interface PropsType {
  type?: string;
  other?: any;
  onClick?(e: MouseEvent<HTMLElement>): void;
  children?: ReactNode;
}
