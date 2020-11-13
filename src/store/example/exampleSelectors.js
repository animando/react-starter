import { createSelector } from '@reduxjs/toolkit';

const rootExample = (state) => state.example;

export const getValue = createSelector([rootExample], (example) => example.value);
