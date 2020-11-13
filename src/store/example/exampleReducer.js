import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
const incrementByAmount = createAction('counter/incrementByAmount');

const initialState = { value: 0 };

const exampleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, _action) => ({
      ...state,
      value: state.value + 1,
    }))
    .addCase(decrement, (state, _action) => ({
      ...state,
      value: state.value - 1,
    }))
    .addCase(incrementByAmount, (state, action) => ({
      ...state,
      value: state.value + action.payload,
    }));
});

export default exampleReducer;
