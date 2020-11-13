import { configureStore as _configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const configureStore = () => {
  const store = _configureStore({
    reducer: rootReducer,
  });

  return store;
};
export default configureStore;
