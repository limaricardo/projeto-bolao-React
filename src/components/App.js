import React from 'react'
import Nav from './Nav'
import Teams from './Teams'
import Groups from './Groups'
import TabelaJogos from './TabelaJogos'
import footballOrg from '../api/footballOrg'
import Bets from '../components/Bets'



class App extends React.Component {


    renderGroup = () => {
        return this.dataGroups.map((data) =>{
            return (
                <Groups id={data.id} groupLetter={data.groupLetter} />
            )
        })
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
        id: 'db',
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