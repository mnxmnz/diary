import { atom } from 'recoil';

export const yearState = atom({
  key: 'year/atom',
  default: new Date().getFullYear(),
});

export const monthState = atom({
  key: 'month/atom',
  default: new Date().getMonth(),
});
