import React from "react";
import '../stylesCSS/Bets.css'



const Bets = ({ setSelectedValue} ) => {

    const onSelectChange = (event) => {
        setSelectedValue(event.target.value)
    }

    return(
        <div>
            <header className='header-grupos'>
                    <h1>Página de apostas</h1>
            </header>
            <div className="filter-container">
                <h3>Filtro</h3>
                <div>
                    <label htmlFor="rodadas">Selecione a rodada</label>
                    <select name="rodadas" onChange={onSelectChange} className="rodada-dropdown">
                        <option disabled>Rodadas</option>
                        <option value="1">Rodada 1</option>
                        <option value="2">Rodada 2</option>
                        <option value="3">Rodada 3</option>
                    </select>
                </div>
            </div>
            <div className="bet-container">
                <p>Brazil</p>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" style={{width: '40px'}} />
                <input></input>
                <p>X</p>
                <input></input>
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" style={{width: '40px'}} />
                <p>Argentina</p>
            </div>
        </div>
    )
}

export default Bets