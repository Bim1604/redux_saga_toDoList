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
            const newTask = { title: action.taskName, isFinished: false };
            state.data = [...state.data, newTask];
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
