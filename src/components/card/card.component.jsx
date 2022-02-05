import React from 'react';
import './card.style.css'

export const Card = props => (
    <div className='card-container'>
        <img alt="painting" src={`https://robohash.org/${props.painting.id}?set=set1`} width="180" height="180"/>
        <h2> {props.painting.name} </h2>
        <p>{ props.painting.email}</p>
    </div>
)