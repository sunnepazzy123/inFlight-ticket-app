import axios from 'axios';

const DOMAIN = process.env.REACT_APP_DOMAIN;

const BASE_URL = `http://localhost:${DOMAIN}`;

export const request = axios.create({
  baseURL: BASE_URL,
});
