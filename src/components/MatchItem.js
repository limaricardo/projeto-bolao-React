import React, { useState } from "react";
import "../stylesCSS/Bets.css";
import IMAGES from '../images'

const MatchItem = ({ match }) => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const awayTeam = match.awayTeam?.name
  const homeTeam = match.homeTeam?.name

  return (
    <div className="bet-container ui segment">
      <p className="nation-name">{awayTeam}</p>
      <img
        alt=""
        src={IMAGES[awayTeam]}
        style={{ width: "40px" }}
      />
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <p>X</p>
      <input
        type="text"
        onChange={(e) => setValue2(e.target.value)}
        value={value2}
      />
      <img
        alt=""
        src={IMAGES[homeTeam]}
        style={{ width: "40px" }}
      />
      <p>{homeTeam}</p>
    </div>
  );
};

export default MatchItem;
