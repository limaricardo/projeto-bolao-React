import React from 'react'
import Nav from './Nav'
import Teams from './Teams'
import Groups from './Groups'
import TabelaJogos from './TabelaJogos'
import footballOrg from '../api/footballOrg'



class App extends React.Component {


    // Results = async (term) => {
    //     const response = await footballOrg.get('')
    // }



    render(){
        return (
    
            <div className="appMain">
                <header className='header-grupos'>
                    <h1>Grupos Copa</h1>
                </header>
                <div className="groups-container">
                    <Groups id="a" letraGrupo="A" />
                    <Groups id="b" letraGrupo="B" />
                    <Groups id="c" letraGrupo="C" />
                    <Groups id="d" letraGrupo="D" />
                    <Groups id="e" letraGrupo="E" />
                    <Groups id="f" letraGrupo="F" />
                    <Groups id="g" letraGrupo="G"/>
                    <Groups id="h" letraGrupo="H"/>
                </div>
            </div>
            )
    }
}

export default App