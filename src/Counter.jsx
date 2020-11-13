import React from 'react';
import { connect } from 'react-redux';
import { getValue } from './store/counter/counterSelectors';
import { Button } from './components';
import { decrement, increment } from './store/counter/counterReducer';

const CounterView = ({ value, onIncrement, onDecrement }) => (
  <div>
    Value: {value}
    <Button onClick={onIncrement} text="Increment" />
    <Button onClick={onDecrement} text="Decrement" />
  </div>
);

const mapStateToProps = (state) => ({
  value: getValue(state),
});
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});
const connector = connect(mapStateToProps, mapDispatchToProps);
const ConnectedCounter = connector(CounterView);
ConnectedCounter.displayName = 'ConnectedCounter';

export default ConnectedCounter;
