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
    <div className="group-container" onClick={onGroupClick}>
      <h2 className="group-header">Grupo {groupLetter}</h2>
      <div className="group-teams">
        <Teams teamName="Brasil" />
        <Teams teamName="Venezuela" />
        <Teams teamName="Uruguai" />
        <Teams teamName="Argentina" />
      </div>
    </div>
  );
};

export default Groups;
