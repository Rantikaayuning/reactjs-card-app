import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/card.css';

const Card = ({ name, image, stageName, id }) => {
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
        setIsClick(!isClick);
    }
  return (
    <>
        <div className='biodata'>
            <div className={isClick ? 'card-red' : 'card'} >
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>Known as {stageName}</p>
            <Link to={`/detail-profile/${id}`} onClick={handleClick}>
                <button className='view-more' >View More</button>
            </Link>
            </div>
        </div>
    </>
  );
};

export default Card;