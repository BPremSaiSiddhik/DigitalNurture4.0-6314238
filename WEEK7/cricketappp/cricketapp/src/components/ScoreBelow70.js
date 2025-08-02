import React from "react";

const ScoreBelow70 = ({ players }) => {
  const players70 = players.filter(player => player.score < 70);
  return (
    <div>
      {players70.map((item, index) => (
        <div key={index}>
          <li>{item.name} <span>Score: {item.score}</span></li>
        </div>
      ))}
    </div>
  );
};

export default ScoreBelow70;
