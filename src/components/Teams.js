import React from 'react';
import '../stylesCSS/Teams.css';

const Teams = (props) => {
    return (
        <div className='teams-container'>
            <img className='flag' src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" alt="brazilian Flag"/>
            <p className='country-name'>{props.teamName}</p>
        </div>
    )
}

export default Teams