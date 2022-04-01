import React from "react";
import MatchItem from "./MatchItem";

const MatchesList = ({ matches, selectedValue }) => {
    console.log(selectedValue)
    const renderedList = matches.filter((match) =>{
        return match.matchday == selectedValue
    }).map((match) => {
        return <MatchItem key={match.id} match={match} />
    }) 
    return <div>{renderedList}</div>
}

export default MatchesList