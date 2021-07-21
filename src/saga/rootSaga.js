/* eslint-disable prettier/prettier */
import { all } from '@redux-saga/core/effects';
import { watchDecrement, watchIncrement, counterSaga } from './counterSaga';

export default function* rootSaga() {
    console.log('root saga');
    yield all([watchDecrement(), watchIncrement(), counterSaga()]);
}
