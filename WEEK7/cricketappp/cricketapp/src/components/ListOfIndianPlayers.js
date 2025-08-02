import React from "react";

const ListOfIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </div>
  );
};

export default ListOfIndianPlayers;
