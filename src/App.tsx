import React, { useState } from "react";
import "./App.css";
import Addtolist from "./components/Addtolist";
import List from "./components/List";

interface Istate {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
     
      name: "LeBron James",
      age: 23,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    
   
  ]);
  return (
    <div className="App">
      <h1>Welcome to my birthday party!</h1>

      <Addtolist people={people} setPeople={setPeople} />
      <List people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
