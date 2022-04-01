import React from 'react';
import './Card.css';
import  illustration from '../../assets/illustration-woman-online-desktop.svg';

const Card = () => {
    return (
        <div className="card__container">
            <img src = {illustration} alt = "woman illustration" />
        </div>
    );
};

export default Card;