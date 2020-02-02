import React from 'react';
import { CounterContext } from './CounterContext';

class Counter extends React.Component {
  static contextType = CounterContext;

  render() {
    const { counter, onIncrement, onDecrement } = this.context;

    return (
      <div className="counter">
        <h1 className="counter__count">Count: {counter}</h1>
        <button className="counter__inc" onClick={onIncrement}>+</button>  
        <button className="counter__dec" onClick={onDecrement}>-</button>   
      </div>
    )
  }
};

export default Counter;