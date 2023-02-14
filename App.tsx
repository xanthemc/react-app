import * as React from 'react';
import './style.css';

let name: string = 'Piyush';
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let printName: (name: string) => never; //void returns undefined, never doesnt return anything
// let person: Object;

//using type/interface to know the properties contains
interface Person {
  name: string;
  age?: number; //optional
}
/* interface extends easily */
/* interface Guy extends Person {
  profession: string;
}
type X = {
  a: string;
  b: number;
};

type Y = X & {
  c: string;
  d: number;
};
let y: Y = {
  c: 'testing type',
  d: 42,
};
 */
// role = [5, 'its a tuple'];
let person: Person = {
  name: 'piyush',
};

let lotsOfPeople: Person[];
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
