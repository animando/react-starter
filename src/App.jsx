import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import Counter from './Counter';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <p>Hello there from codesandbox.io</p>
    <Counter />
  </Provider>
);

export default App;
