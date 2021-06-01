import axios from 'axios';

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
