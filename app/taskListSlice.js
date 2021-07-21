/* eslint-disable prettier/prettier */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
};

const taskList = createSlice({
    name: 'Task List',
    initialState,
    reducers: {
        AddTask(state, action) {
            const newTask = { title: action.payload, isFinished: false };
            state.data = [...state.data, newTask];
        },
        FinishTask(state, action) {
            state.data[action.payload].isFinished = true;
            state.data = [...state.data];
        },
        DeleteTask(state, action) {
            state.data = state.data.filter((item, i) => i !== action.payload);
            state.data = [...state.data];
        },
    },
});

export const { AddTask, FinishTask, DeleteTask } = taskList.actions;

export default taskList.reducer;
