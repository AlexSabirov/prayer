import axios from 'axios';

import { Login } from './type';

export const instance = axios.create({
  baseURL: 'https://prayer.herokuapp.com/api/',
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signIn = (data: Login) => {
  return instance
    .post('auth/sign-in', { data })
    .then((response) => {
      response;
    })
    .catch((error) => {
      console.log(error);
    });
};
