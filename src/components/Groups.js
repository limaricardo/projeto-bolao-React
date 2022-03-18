import './Groups.css'
import React from 'react'
import Teams from './Teams'


const Groups = () => {
    return (
        <div className='group-container'>
            <h2 className='group-header'>Grupo X</h2>
            <div className='group-teams'>
                <Teams />
                <Teams />
                <Teams />
                <Teams />
            </div>
        </div>
    )
}

export default Groups