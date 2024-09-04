import { FC } from "react";

interface Props {
  name: string;
  age: number;
  email: string;
  // getName: (name: string) => string;
}

/*
const Person = ({ name, age, email }: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
*/

const Person: FC<Props> = ({ name, email, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Person;
