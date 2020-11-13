import { createSelector } from '@reduxjs/toolkit';

const root = (state = {}) => state.counter;

export const getValue = createSelector([root], (counter) => counter.value);
