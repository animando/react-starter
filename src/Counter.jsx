import React from 'react';
import { connect } from 'react-redux';
import { getValue } from './store/example/exampleSelectors';
import { Button } from './components';
import { decrement, increment } from './store/example/exampleReducer';

const CounterView = ({ value, onIncrement, onDecrement }) => (
  <div>
    <p>
      Value:
      {' '}
      {value}
    </p>
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
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(CounterView);

export default ConnectedCounter;
