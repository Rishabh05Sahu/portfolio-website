import React from 'react';
import "../Card/Card.css";
import github from "../../assets/github.png";

const Card = (props) => {
  return (
    <div className='card'>
      <div className="card-front">
        <h2 className='card-front-heading'>{props.name}</h2>
        <div className="card-front-content">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="card-back">
        <img src={props.image} alt="" />
        <div className="card-back-content">
          {props.tags}
        </div>
        <div className="card-back-btn-container">
         <a href={props.link} target='_blank'><button  className='card-back-visit'>Visit</button></a> 
         <a href={props.gitlink} target='_blank'> <img src={github} alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
