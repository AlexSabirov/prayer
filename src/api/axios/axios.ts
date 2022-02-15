import axios from 'axios';

import { store } from '../../store/store';
import { CreateColumnBody, LoginBody, UpdateColumnBody } from './type';

export const instance = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
});

const instanceToken = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
});

const token = store.getState().authSlice.token;

instanceToken.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  } else config.headers['authorization'] = `Bearer ${token}`;
  return config;
});

export const signIn = (data: LoginBody) => {
  return instance
    .post('auth/sign-in', data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getColumns = () => {
  return instanceToken
    .get('/columns')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createColumn = (data: CreateColumnBody) => {
  return instanceToken
    .post('/columns', data)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getColumnById = (columnId) => {
  return instanceToken
    .get(`/columns/${columnId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const updateColumn = (data: UpdateColumnBody) => {
  return instanceToken
    .put(`/columns/${data.id}`, data)
    .then((respose) => respose.data)
    .catch((error) => {
      console.log(error);
    });
};
