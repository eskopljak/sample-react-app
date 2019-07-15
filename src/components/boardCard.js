import React from 'react';

import '../styles/card.css'

function BoardCard(props) {
    return (
        <div className='card' >
            <h3 className='my-auto textSize'>{props.name}</h3>
        </div>
    )
}

export default BoardCard;
