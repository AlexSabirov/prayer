import AsyncStorage from '@react-native-community/async-storage';
import { all } from '@redux-saga/core/effects';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { authWatcher } from './ducks/auth/saga';
import authSlice from './ducks/auth/slice';
import {
  addColumnWatcher,
  getColumnsWatcher,
  getPrayersWatcher,
  removeColumnWatcher,
  updateColumnWatcher,
} from './ducks/board/saga';
import boardSlice from './ducks/board/slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ authSlice, boardSlice });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSaga() {
  yield all([
    authWatcher(),
    getColumnsWatcher(),
    addColumnWatcher(),
    removeColumnWatcher(),
    updateColumnWatcher(),
    getPrayersWatcher(),
  ]);
}

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
