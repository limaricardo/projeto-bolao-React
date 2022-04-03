import React from 'react'
import Nav from './Nav'
import Teams from './Teams'
import Groups from './Groups'
import TabelaJogos from './TabelaJogos'
import footballOrg from '../api/footballOrg'
import Bets from '../components/Bets'
import MatchesList from './MatchesList'
import { useState, useEffect } from "react";



const App = () =>{

    const [matches, setMatches] = useState([])
    const [selectedValue, setSelectedValue] = useState(1)

    const worldCupMatches = async () => {
        const response = await footballOrg.get('/competitions/WC/matches')
        setMatches(response.data.matches)
        console.log(response)
    };

    useEffect(() => {
        worldCupMatches()
    }, []);
    

    const renderGroup = () => {
        return dataGroups.map((data) =>{
            return (
                <Groups id={data.id} groupLetter={data.groupLetter} />
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
            <Bets setSelectedValue={setSelectedValue} />
            <MatchesList selectedValue={selectedValue} matches={matches} />
            {/* <header className='header-grupos'>
                <h1>Grupos Copa</h1>
            </header>
            <div className="groups-container">
                {this.renderGroup()}
            </div> */}
        </div>
        )
    
}

export default App