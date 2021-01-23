import React from 'react';
import '../../assets/css/card.css';

const Card2 = ({ name, img, id}) => {
    return (
        <div className="card2">
            <p>{name} New Family</p>
            <img
                src={img}
                alt={name}
                width="100px"
            />
            <p>My name is {name} {id}</p>
        </div>
    )
}

export default Card2;