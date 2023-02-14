import * as React from 'react';
import './style.css';
import './App.css';
import InputField from './components/InputField';
let name: string = 'Piyush';
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let printName: (name: string) => never; //void returns undefined, never doesnt return anything
// let person: Object;

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
