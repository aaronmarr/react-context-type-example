import React from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';

import './App.css';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
