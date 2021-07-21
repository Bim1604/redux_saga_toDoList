/* eslint-disable prettier/prettier */

const initialNumber = {number: 1};
const numberReducer = (state = initialNumber, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {number: state.number + 1};
    case 'SUB_NUMBER':
      return {number: state.number - 1};
  }

  return state;
};

export default numberReducer;
