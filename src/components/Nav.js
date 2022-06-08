import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="nav-link active">Grupos</Link>
                <Link to="/create-bolao" className="nav-link">Criar Bolão</Link>
                <Link to="/bets" className="nav-link">Apostas</Link>
                <Link to="/register" className="nav-link">Registrar</Link>
                <Link to="/tabela-jogos" className="nav-link">Tabela Jogos</Link>
            </nav>
        </div>
    )

}

export default Nav
