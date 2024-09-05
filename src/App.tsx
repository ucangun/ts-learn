import React, { FC } from "react";
import "./App.css";
import Person, { HairColor } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person
        name="Umut"
        age={26}
        email={"ucangun75@gmail.com"}
        hairColor={HairColor.Blonde}
      />
    </div>
  );
};

export default App;
