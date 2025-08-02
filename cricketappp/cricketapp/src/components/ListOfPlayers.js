import React from "react";

const ListOfPlayers = ({ players }) => {
  return (
    <div>
      {players.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name} <span>Score: {item.score}</span></li>
        </div>
      ))}
    </div>
  );
};

export default ListOfPlayers;
