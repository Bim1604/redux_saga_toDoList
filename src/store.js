/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../app/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import taskListReducer from '../app/taskListSlice';
import rootSaga from './saga/rootSaga';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
  counter: counterReducer,
  taskList: taskListReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
