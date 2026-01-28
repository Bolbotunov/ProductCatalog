import { ReactNode } from 'react';

export type ButtonType = {
  type: ButtonTypes;
  onClick: () => void;
  children: ReactNode;
  disabled: boolean;
};

export enum ButtonTypes {
  APPLY = 'apply',
  CANCEL = 'cancel',
}
