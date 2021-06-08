import axios from 'axios';
import { IRawData } from '../types/index';

const instance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 1000,
});

export const getCardData = async () => {
  try {
    const data = await instance.get('/posts');
    return data.data.data;
  } catch (e) {
    return null;
  }
};

export const createCardData = async (rawData: IRawData) => {
  try {
    const data = await instance.post('/posts', {
      data: rawData,
    });
    return data.data.data;
  } catch (e) {
    return null;
  }
};
