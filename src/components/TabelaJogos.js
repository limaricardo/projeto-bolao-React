import React from "react";
import "../stylesCSS/TabelaJogos.css"
import TabelaCont from "./TabelaCont";

const TabelaJogos = () => {
    return (
        <div>
            <header>
                <h1>Tabela de jogos</h1>
            </header>
            <section>
                <div>
                    <TabelaCont />
                </div>
            </section>
        </div>
    )
}

export default TabelaJogos