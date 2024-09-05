import { ChangeEvent, FC, useState } from "react";

export enum HairColor {
  Blonde = "Wow",
  Brown = "Brown",
  Black = "Cool",
}
interface Props {
  name: string;
  age: number;
  email: string;
  hairColor: HairColor;
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

const Person: FC<Props> = ({ name, email, age, hairColor }) => {
  const [country, setCountry] = useState<string | null>("");
  /*
  type NameType = "Pedro" | "Jack";
  const nameForType = "Jack";
  */

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <input placeholder="Write down your country..." onChange={handleChange} />

      {country}
      {hairColor}
    </div>
  );
};

export default Person;
