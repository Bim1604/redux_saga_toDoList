/* eslint-disable prettier/prettier */
let appState = {
  data: [
  ],
};

const taskListReducer = (state = appState, action) => {
  let newTaskList = state.data;

  switch (action.type) {
    case 'ADD':
      const newTask = { title: action.taskName, isFinished: false };
      return { ...state, data: [...newTaskList, newTask] };
    case 'FINISH':
      newTaskList[action.atIndex].isFinished = true;
      return { ...state, data: newTaskList };
    case 'DELETE':
      newTaskList = newTaskList.filter((item, i) => i !== action.atIndex);
      return { ...state, data: newTaskList };
  }
  return state;
};

export default taskListReducer;
