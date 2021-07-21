/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
  status: 'idle',
};

const counter = createSlice({
  name: 'Counter',
  initialState,
  reducers: {
    increase(state) {
      state.number++;
    },
    decrease(state) {
      state.number--;
    },
    incrementSaga: (state, action: PayLoadAction<number>) => {
      state.status = 'loading';
    },
    incrementSagaSuccess: (state, action: PayLoadAction<number>) => {
      state.status = 'idle';
      state.number += action.payload;
    },
    decrementSaga: (state, action: PayLoadAction<number>) => {
      state.status = 'loading';
    },
    decrementSagaSuccess: (state, action: PayLoadAction<number>) => {
      state.status = 'idle';
      state.number -= action.payload;
    },
  },
});

export const { increase, decrease, incrementSaga, incrementSagaSuccess, decrementSaga, decrementSagaSuccess} = counter.actions;

export default counter.reducer;
