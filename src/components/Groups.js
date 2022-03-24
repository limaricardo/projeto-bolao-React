import '../stylesCSS/Groups.css'
import React from 'react'
import Teams from './Teams'


const Groups = (props) => {
    return (
        <div className='group-container'>
            <h2 className='group-header'>Grupo {props.groupLetter}</h2>
            <div className='group-teams'>
                <Teams teamName="Brasil" />
                <Teams teamName="Venezuela" />
                <Teams teamName="Uruguai" />
                <Teams teamName="Argentina" />
            </div>
        </div>
    )
}

export default Groups