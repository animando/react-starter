import React from 'react';
import { connect } from 'react-redux';
import { getValue } from './store/counter/counterSelectors';
import { Button } from './components';
import { decrement, increment } from './store/counter/counterReducer';

class CounterView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showButtons: false,
    };
    this.onShowButtons = this.onShowButtons.bind(this);
    this.onHideButtons = this.onHideButtons.bind(this);
  }

  onShowButtons() {
    this.setState({
      showButtons: true,
    });
  }

  onHideButtons() {
    this.setState({
      showButtons: false,
    });
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    const { showButtons } = this.state;

    return (
      <div>
        Value: {value}
        {showButtons && (
          <>
            <Button onClick={onIncrement} text="Increment" />
            <Button onClick={onDecrement} text="Decrement" />
            <div>
              <Button onClick={this.onHideButtons} text="Hide" />
            </div>
          </>
        )}
        {!showButtons && (
          <div>
            <Button onClick={this.onShowButtons} text="Show Buttons" />
          </div>
        )}
      </div>
    );
  }
}

// const CounterView = ({ value, onIncrement, onDecrement }) => (
//       <div>
//         Value: {value}
//         <Button onClick={onIncrement} text="Increment" />
//         <Button onClick={onDecrement} text="Decrement" />
//       </div>
//     )

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
