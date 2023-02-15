import * as React from 'react';

type GreetProps = {
  name: string;
};
export const Greet = (props) => {
  return (
    <div>
      <h2>Welcome {props.name} You have 10 unread messages</h2>
    </div>
  );
};
