import React, { useEffect, useState } from "react";
import '../stylesCSS/Bets.css';


const MatchItem = ({ match }) => {

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  const saveValue = () => {

    var values = JSON.parse(localStorage.getItem('values') || '[]')
    var results = {
      matchId: match.id,
      rodada: match.matchDay,
      value1: value,
      value2: value2
    }

    if (value && value2) {
      values.push(results)
    }

    localStorage.setItem('values', JSON.stringify(values))

  }

  useEffect(() => {
    if (value && value2){
      saveValue()
    }
  }, [value, value2])

  return (
    <div className="bet-container ui segment">
      <p className="nation-name">{match.awayTeam?.name}</p>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
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
        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
        style={{ width: "40px" }}
      />
      <p>{match.homeTeam?.name}</p>
    </div>
  );
};

export default MatchItem;
