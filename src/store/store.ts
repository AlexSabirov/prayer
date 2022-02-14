import AsyncStorage from '@react-native-community/async-storage';
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import authSlice from './ducks/auth/slice';
import boardSlice from './ducks/board/slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({ authSlice, boardSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
