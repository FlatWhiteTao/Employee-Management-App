import { EAMIL_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
    type: EAMIL_CHANGED,
    payload: text
  };
};
