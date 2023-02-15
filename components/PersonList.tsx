import * as React from 'react';
type PersonListProps = {
  name: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props) => {
  return (
    <div>
      {props.name.map((name) => {
        return <h2></h2>;
      })}
      {/* <h2>Bruce Wayne</h2>
      <h2>Clark Kent</h2>
      <h2>Princess</h2> */}
    </div>
  );
};
