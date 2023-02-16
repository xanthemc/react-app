import * as React from 'react';
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

//input value and onchangehandler
export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    /* pass event as props */
    <input type="text" value={props.value} onChange={props.handleChange} />
    /* define handlechange within component  */
    // <input type="text" value={props.value} onChange={handleChange} />
  );
};
