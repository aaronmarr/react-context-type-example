import React from 'react';

let CounterContext;
const { Consumer, Provider } = CounterContext = React.createContext();

class CounterProvider extends React.Component {
  // Our state object contains a simple 'counter' value, which is 
  // initialised to '0'
  state = {
    counter: 0
  };

  // Our provider privides a 'handleIncrement' method to increment
  // the counter
  handleIncrement = () => {
    this.setState({ counter: ++this.state.counter });
  };

  // We also have a decrement handler for decrementing the counter
  handleDecrement = () => {
    this.setState({ counter: --this.state.counter });
  };

  render() {
    return (
      // Our privider returns a new React provider context, passing any children.
      // The values which this provider provides is a copy of the state (e.g. the counter)
      // as well as the increment and decrement handlers
      <Provider
        // Anything passes to 'value' will be made available to consumers
        value={{
          ...this.state,
          onIncrement: this.handleIncrement,
          onDecrement: this.handleDecrement,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { CounterProvider, Consumer as CounterConsumer, CounterContext };