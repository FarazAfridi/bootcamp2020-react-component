import React from 'react';



const Card = (props) => {
    return (
    <div>
    <div>
        <h1>{props.cardTitle}</h1>
    </div>
    <div>
        <p>{props.cardBody}</p>
    </div>
    <div>
        <p>{props.cardFooter}</p>
    </div>
    </div>
    );
}

export default Card;