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
            console.log('zo');
            const newTask = { title: action.payload, isFinished: false };
            state.data = [...state.data, newTask];
            console.log(state.data);
        },
        FinishTask(state) {
            state.number--;
        },
        DeleteTask(state) {
            state.number--;
        },
    },
});

export const { AddTask, FinishTask, DeleteTask } = taskList.actions;

export default taskList.reducer;
