import React from "react";
import "../Wheel/Wheel.css";

const Wheel = ({ symbolClick, setsymbolClick }) => {
  return (
    <div
      onClick={() => {
        setsymbolClick(!symbolClick);
        
      }}
      className={`wheel ${
        symbolClick ? "wheelanimate " : <></>
      }`}>
      <div
        className={`wheel-container ${
          symbolClick ? "wheel-container-bottom yinyang-bottom  " : ""
        }`}
      >
        <div className="yinyang"></div>
        <span className={`wheel-container ${
          symbolClick ? "hide-span" : ""
        }`}>click here</span>
      </div>
    </div>
  );
};

export default Wheel;
