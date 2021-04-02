import axios from 'axios';

export const api = axios.create({
  baseURL: `https://en.wikipedia.org/w/`,
  headers: {
    'Content-Type': 'application/json'
  }
});
