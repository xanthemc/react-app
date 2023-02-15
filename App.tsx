import * as React from 'react';
import { Greet } from './components/Greet';
import './style.css';

interface Person {
  name: string;
  age?: number; //optional
}
function App() {
  return (
    <div className="App">
      <Greet name='Vishmas'>
    </div>
  );
}

export default App;
