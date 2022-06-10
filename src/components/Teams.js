import React from "react";
import "../stylesCSS/Teams.css";
import IMAGES from '../images'

const Teams = ({ matches, groupLetter }) => {
  
  const renderedList = matches
    .filter((match) => {
      return match.group == `GROUP_${groupLetter}` && match.matchDay === 1;
    })
    .map((match, index) => {
      return (
        <div key={index}>
          <div>{match.homeTeam?.name}</div>
          <div>{match.awayTeam?.name}</div>
        </div>
      );
    });

  const name1 = renderedList[0].props.children[0].props.children
  const name2 = renderedList[0].props.children[1].props.children
  const name3 = renderedList[1].props.children[0].props.children
  const name4 = renderedList[1].props.children[1].props.children


  return (
    <div>
      <div className="teams-container">
        <img
          className="flag"
          src={IMAGES[name1]}
          alt={`${name1} flag`}
        />
        <p className="country-name">
          {name1}
        </p>
      </div>
      <div className="teams-container">
        <img
          className="flag"
          src={IMAGES[name2]}
          alt={`${name2} flag`}
        />
        <p className="country-name">
          {name2}
        </p>
      </div>
      <div className="teams-container">
        <img
          className="flag"
          src={IMAGES[name3]}
          alt={`${name3} flag`}
        />
        <p className="country-name">
          {name3}
        </p>
      </div>
      <div className="teams-container">
        <img
          className="flag"
          src={IMAGES[name4]}
          alt={`${name4} flag`}
        />
        <p className="country-name">
          {name4}
        </p>
      </div>
    </div>
  );
};

export default Teams;
