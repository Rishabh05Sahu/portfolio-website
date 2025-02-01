import React from "react";
import "../Card/Card.css";
import github from "../../assets/github.png";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <h2 className="card-front-heading">{props.name}</h2>
          <div className="card-front-content">
            <img src={props.image} alt="" />
            <div className="card-back-content">{props.tags}</div>
            <div className="card-back-btn-container">
              <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="card-back-visit">Visit</button>
              </a>
              <a href={props.gitlink} target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
