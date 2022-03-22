import React from "react";
import '../stylesCSS/TabelaCont.css'

const TabelaCont = () => {
    return (
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
                    <td>1</td>
                    <td>20/04/2022</td>
                    <td>12:00</td>
                    <td>Brasil</td>
                    <td>5</td>
                    <td>x</td>
                    <td>0</td>
                    <td>Egito</td>
                </tr>
            </tbody>  
        </table>
    )
}

export default TabelaCont;