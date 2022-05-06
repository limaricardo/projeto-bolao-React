import React from 'react'
import Nav from './Nav'
import Teams from './Teams'
import Groups from './Groups'
import TabelaJogos from './TabelaJogos'
import bolaoApi from '../api/bolaoApi'
import footballOrg from '../api/footballOrg'
import Bets from '../components/Bets'
import MatchesList from './MatchesList'
import { useState, useEffect } from "react";
import CreateBolao from './CreateBolao'



const App = () =>{

    const [matches, setMatches] = useState([])
    const [selectedValue, setSelectedValue] = useState(1)
    const [groupClicked, setGroupClicked] = useState('GROUP_A')

    const worldCupMatches = async () => {
        const response = await bolaoApi.get('/match');
        setMatches(response.data)
        console.log(response)
    };

    useEffect(() => {
        worldCupMatches()
    }, []);
    

    const renderGroup = () => {
        return dataGroups.map((data) =>{
            return (
                <Groups id={data.id} groupLetter={data.groupLetter} setGroupClicked={setGroupClicked} />
            )
        })
    }

    const dataGroups = [{
        id: 'a',
        groupLetter: 'A'
    },
    {
        id: 'b',
        groupLetter: 'B'
    },
    {
        id: 'c',
        groupLetter: 'C'
    },
    {
        id: 'd',
        groupLetter: 'D'
    },
    {
        id: 'e',
        groupLetter: 'E'
    },
    {
        id: 'f',
        groupLetter: 'F'
    },
    {
        id: 'g',
        groupLetter: 'G'
    },
    {
        id: 'h',
        groupLetter: 'H'
    },]

    
    return (
        <div className="appMain">
            {/* <div className='Tabela-Jogos'>
                <h1>Grupo {groupClicked[6]}</h1>
                <TabelaJogos matches={matches} groupClicked={groupClicked} />
            </div> */}
            {/* <CreateBolao /> */}
            <Bets setSelectedValue={setSelectedValue} />
            <MatchesList selectedValue={selectedValue} matches={matches} />
            {/* <header className='header-grupos'>
                <h1>Grupos Copa</h1>
            </header>
            <div className="groups-container">
                {renderGroup()}
            </div> */}
        </div>
        )
    
}

export default App