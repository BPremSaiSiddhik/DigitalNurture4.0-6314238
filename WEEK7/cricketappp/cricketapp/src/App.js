import React from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import ScoreBelow70 from "./components/ScoreBelow70";
import { OddPlayers } from "./components/OddPlayers";
import { EvenPlayers } from "./components/EvenPlayers";
import ListOfIndianPlayers from "./components/ListOfIndianPlayers";

function App() {
  const flag = true; 

  const players = [
    { name: "Virat", score: 88 },
    { name: "Rohit", score: 45 },
    { name: "Dhoni", score: 74 },
    { name: "Hardik", score: 34 },
    { name: "Bumrah", score: 50 },
    { name: "KL Rahul", score: 77 },
    { name: "Rishabh", score: 60 },
    { name: "Shami", score: 68 },
    { name: "Ashwin", score: 90 },
    { name: "Jadeja", score: 84 },
    { name: "Surya", score: 59 },
  ];

  const T20Players = ['Rohit', 'Virat', 'Hardik'];
  const RanjiTrophyPlayers = ['Shreyas', 'Iyer', 'Gill'];
  const IndianTeam = [...T20Players, ...RanjiTrophyPlayers];

  if (flag) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListOfPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Indian Team</h1>
        <h2>Odd Players</h2>
        {OddPlayers(IndianTeam)}
        <hr />
        <h2>Even Players</h2>
        {EvenPlayers(IndianTeam)}
        <hr />
        <h2>List of Indian Players Merged:</h2>
        <ListOfIndianPlayers IndianPlayers={IndianTeam} />
      </div>
    );
  }
}

export default App;
