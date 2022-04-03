import React from "react";
import '../stylesCSS/Bets.css';

const MatchItem = ({ match }) => {
  return (
    <div className="bet-container ui segment">
      <p className="nation-name">{match.awayTeam.name}</p>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
        style={{ width: "40px" }}
      />
      <input></input>
      <p>X</p>
      <input></input>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
        style={{ width: "40px" }}
      />
      <p>{match.homeTeam.name}</p>
    </div>
  );
};

export default MatchItem;
