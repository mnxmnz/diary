import { atom } from 'recoil';

export const yearState = atom({
  key: 'year/atom',
  default: new Date().getFullYear(),
});

export const monthState = atom({
  key: 'month/atom',
  default: new Date().getMonth(),
});

export const rawDataState = atom({
  key: 'rawData/atom',
  default: [],
});

export const userDataState = atom({
  key: 'userData/atom',
  default: [],
});
