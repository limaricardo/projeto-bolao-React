import "../stylesCSS/Groups.css";
import React from "react";
import Teams from "./Teams";
import { useNavigate } from 'react-router-dom';

const Groups = ({ groupLetter, setGroupClicked, matches }) => {

  const navigate = useNavigate();

  const onGroupClick = () => {
    setGroupClicked(`GROUP_${groupLetter}`);
    navigate('/tabela-jogos')
  };

  return (
    <div className="group-container">
      <h2 className="group-header" onClick={onGroupClick}>Grupo {groupLetter}</h2>
      <div className="group-teams">
        <Teams matches={matches} groupLetter={groupLetter} />
      </div>
    </div>
  );
};

export default Groups;
