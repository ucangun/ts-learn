import React, { FC, createContext } from "react";
import "./App.css";
import Person, { HairColor } from "./components/Person";

interface AppCpntextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppCpntextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppCpntextInterface = {
    name: "John",
    age: 30,
    country: "German",
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person
          name="Umut"
          age={26}
          email={"ucangun75@gmail.com"}
          hairColor={HairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
