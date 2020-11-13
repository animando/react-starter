import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
// const incrementByAmount = createAction('counter/incrementByAmount');

const initialState = { value: 0 };

// const exampleReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state, _action) => ({
//       ...state,
//       value: state.value + 1,
//     }))
//     .addCase(decrement, (state, _action) => ({
//       ...state,
//       value: state.value - 1,
//     }))
//     .addCase(incrementByAmount, (state, action) => ({
//       ...state,
//       value: state.value + action.payload,
//     }));
// });

const counterReducer = (state = initialState, { type, _payload }) => {
  switch (type) {
    case 'counter/increment':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'counter/decrement':
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
