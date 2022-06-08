import React from "react";
import "../stylesCSS/TabelaJogos.css";
import TabelaCont from "./TabelaCont";

const TabelaJogos = ({ matches, groupClicked }) => {
  const matchData = matches
    .filter((match) => {
      return match.group == groupClicked;
    })
    .map((match) => {
      return <TabelaCont key={match.id} match={match} />;
    });

  return (
    <div>
      <h1>Grupo {groupClicked[6]}</h1>
      <header>
        <h1>Tabela de jogos</h1>
      </header>
      <section>
        <div>{matchData}</div>
      </section>
    </div>
  );
};

export default TabelaJogos;
