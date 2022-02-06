import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducer } from './ducks/auth/reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(mySaga);
