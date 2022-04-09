import '../stylesCSS/Groups.css'
import React from 'react'
import Teams from './Teams'


const Groups = ({ groupLetter, setGroupClicked } ) => {

    const onGroupClick = ()=> {
        setGroupClicked(`GROUP_${groupLetter}`)
    }

    return (
        <div className='group-container' onClick={onGroupClick}>
            <h2 className='group-header'>Grupo {groupLetter}</h2>
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