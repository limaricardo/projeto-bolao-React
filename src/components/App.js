import React from 'react'
import Nav from './Nav'
import Teams from './Teams'
import Groups from './Groups'
import TabelaJogos from './TabelaJogos'
import footballOrg from '../api/footballOrg'
import Bets from '../components/Bets'
import MatchesList from './MatchesList'



class App extends React.Component {

    state = { rodada1: [] } 

    worldCupMatches = async () => {
        const response = await footballOrg.get('/competitions/WC/matches?matchday=1')
        console.log(response)
    }

    

    renderGroup = () => {
        return this.dataGroups.map((data) =>{
            return (
                <Groups id={data.id} groupLetter={data.groupLetter} />
            )
        })
    }

    onRodadaSelect = (matches) => {
        this.setState({ })
    }


    dataGroups = [{
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

    render(){
        return (
            <div className="appMain">
                <Bets />
                <MatchesList matches={this.state.matches} />
                {/* <header className='header-grupos'>
                    <h1>Grupos Copa</h1>
                </header>
                <div className="groups-container">
                    {this.renderGroup()}
                </div> */}
            </div>
            )
    }
}

export default App