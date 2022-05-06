import React from "react";
import '../stylesCSS/TabelaCont.css'

const TabelaCont = ({ match }) => {
    
    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rodada</th>
                        <th>Data</th>
                        <th>Horario</th>
                        <th className="th-partida">Partida</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{match.matchday}</td>
                        <td>20/04/2022</td>
                        <td>12:00</td>
                        <td>{match.homeTeam?.name}</td>
                        <td>0</td>
                        <td>x</td>
                        <td>0</td>
                        <td>{match.awayTeam?.name}</td>
                    </tr>
                </tbody>  
            </table>
        </div>
    )
}

export default TabelaCont;