import React from 'react';

import {Card} from '../card/card.component.jsx'

import './card-list.style.css'

// functional component
export const CardList = (props) => {
    
    return <div className='card-list'>
    
        {/* we want to run some js */}
        {props.paintings.map(painting => (
            <Card key={painting.id} painting={painting}/>
        ))}
    </div>
    }