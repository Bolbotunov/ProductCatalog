import { ReactNode } from 'react';

export type ButtonType = {
  type: ButtonTypes;
  size?: ButtonSize;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
};

export enum ButtonTypes {
  APPLY = 'apply',
  CANCEL = 'cancel',
}

export enum ButtonSize {
  BIG = 'big',
  SMALL = 'small',
}
