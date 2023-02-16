import * as React from 'react';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
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
      <Status status="error" />
      <Oscar>
        <Heading>PlaceHolder text</Heading>
      </Oscar>
    </div>
  );
}

export default App;
