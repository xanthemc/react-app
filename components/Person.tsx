import * as React from 'react';

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};
export const Person = (props) => {
  return <div>{props.name}</div>;
};
