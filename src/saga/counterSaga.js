/* eslint-disable prettier/prettier */
import { increase, decrease, incrementSaga, incrementSagaSuccess, decrementSaga, decrementSagaSuccess } from '../../app/counterSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import {takeEvery, delay, put, takeLatest } from '@redux-saga/core/effects';

function* increment(){
    console.log('Increment');
}

export function* watchIncrement(){
    yield takeEvery(increase, increment);
}

function* decrement(){
    console.log('Decrement');
}

export function* watchDecrement(){
    yield takeEvery(decrease, decrement);
}

function* handleIncrementSaga(action: PayloadAction<number>) {

    // wait 1s
    console.log('Waiting done, dispatch action');
    yield delay(1000);

    // Dispatch success
    yield put(incrementSagaSuccess(action.payload));
}

function* handleDecrementSaga(action: PayloadAction<number>) {

    // wait 1s
    console.log('Waiting done, dispatch action');
    yield delay(1000);

    // Dispatch success
    yield put(decrementSagaSuccess(action.payload));
}

export function* counterSaga() {
    console.log('counter saga');
    yield takeLatest(incrementSaga, handleIncrementSaga);
    yield takeLatest(decrementSaga, handleDecrementSaga);
}