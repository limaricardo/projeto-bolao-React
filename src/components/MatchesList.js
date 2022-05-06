import React from "react";
import MatchItem from "./MatchItem";
import '../stylesCSS/Bets.css'

const MatchesList = ({ matches, selectedValue }) => {
    const renderedList = matches.filter((match) =>{
        return match.matchDay == selectedValue
    }).map((match) => {
        return <MatchItem key={match.id} match={match} />
    }) 
    return <div className="match-container">{renderedList}</div>
}

export default MatchesList