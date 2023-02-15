import * as React from 'react';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import './style.css';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Dlana',
    },
  ];
  return (
    <div className="App">
      <Greet name="Vishmas" messageCount={20} isLoggedIn={false} />
      {/* object */}
      <Person name={personName} />
      {/* array */}
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
