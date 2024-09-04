import React, { FC } from "react";
import "./App.css";
import Person from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="Umut" age={26} email={"ucangun75@gmail.com"} />
    </div>
  );
};

export default App;
