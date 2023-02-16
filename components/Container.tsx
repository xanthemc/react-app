import * as React from 'react';

type ContainerProps = {
  styles: React.CSSProperties; //restrict to only css type
};
//pass styles as props
export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text Content goes here</div>;
};
