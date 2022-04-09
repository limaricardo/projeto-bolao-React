import React from "react";
import "../stylesCSS/TabelaJogos.css"
import TabelaCont from "./TabelaCont";

const TabelaJogos = ( {matches, groupClicked } ) => {
    
    const matchData = matches.filter((match) => {    
        return match.group == groupClicked
    }).map((match) => {
        return <TabelaCont match={match} />
    })

    return (
        <div>
            <header>
                <h1>Tabela de jogos</h1>
            </header>
            <section>
                <div>
                    {matchData}
                </div>
            </section>
        </div>
    )
}

export default TabelaJogos