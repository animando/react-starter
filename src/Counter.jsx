import React from 'react';
import { connect } from 'react-redux';
import { getValue } from './store/counter/counterSelectors';
import { Button } from './components';
import { decrement, increment } from './store/counter/counterReducer';

const CounterView = ({ value, onIncrement, onDecrement }) => {
  const [showButtons, setShowButtons] = React.useState(false);

  const onHideButtons = React.useCallback(() => {
    setShowButtons(false);
  }, []);
  const onShowButtons = React.useCallback(() => {
    setShowButtons(true);
  }, []);

  return (
    <div>
      Value: {value}
      {showButtons && (
      <>
        <Button onClick={onIncrement} text="Increment" />
        <Button onClick={onDecrement} text="Decrement" />
        <div>
          <Button onClick={onHideButtons} text="Hide Buttons" />
        </div>
      </>
      )}
      {!showButtons && (
      <div>
        <Button onClick={onShowButtons} text="Show Buttons" />
      </div>
      )}
    </div>
  );
};

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
