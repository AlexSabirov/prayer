import axios from 'axios';
import { normalize, schema } from 'normalizr';

import { CreateColumnBody, LoginBody } from './type';

export const instance = axios.create({
  baseURL: 'https://prayer.herokuapp.com/',
});

export const signIn = (data: LoginBody) => {
  return instance
    .post('auth/sign-in', data)
    .then((response) => {
      const AUTH_TOKEN = `Bearer ${response.data.token}`;
      instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getColumns = () => {
  return instance
    .get('/columns')
    .then((response) => {
      const columnSchema = new schema.Entity('columns');
      const columnListSchema = new schema.Array(columnSchema);
      const normalizedData = normalize(response.data, columnListSchema);
      console.log(`NData:`, normalizedData.entities);
      return normalizedData.entities.columns;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createColumn = (data: CreateColumnBody) => {
  return instance
    .post('/columns', data)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const getColumnById = (columnId) => {
  return instance
    .get(`/columns/${columnId}`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
