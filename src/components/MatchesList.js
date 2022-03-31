import React from "react";
import MatchItem from "./MatchItem";

const MatchesList = ({ matches, onRodadaSelect }) => {
    console.log(matches)
    const renderedList = matches.map((match) => {
        return <MatchItem match={match} onRodadaSelect={onRodadaSelect} />
    }) 

    return <div>{renderedList}</div>
}

export default MatchesList