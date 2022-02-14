import AsyncStorage from '@react-native-community/async-storage';
import { fork } from '@redux-saga/core/effects';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { watchAuth } from './ducks/auth/saga';
import authSlice from './ducks/auth/slice';
import { addColumnWatcher, getColumnsWatcher } from './ducks/board/saga';
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

const storeFunc = () => store;

function* rootSaga() {
  yield fork(watchAuth);
  yield fork(getColumnsWatcher);
  yield fork(addColumnWatcher);
}
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeFunc>;
export type AppDispatch = AppStore['dispatch'];
