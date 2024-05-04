import React from 'react'
import "../Card/Card.css"
import random from "../../assets/random.png"
import github from "../../assets/github.png"

const Card = () => {
  return (
    <div className='card'>
      <div className="card-front">
        <h2 className='card-front-heding'>KryptoGiffy</h2>
        <p>
        This platform allows you to perform transactions via Blockchain by using Ethereum mainnet.Prerequsite : Web3.0 Wallet.
        </p>

      </div>
      <div className="card-backward">
          <img className='card-back-main-img' src={random} alt="" />
          <hr />
          <p>#sdfgh #erty #dfg #erty #dfg</p>
          <div className="card-back-btn-container">
              <button>Visit</button>
              <img src={github} alt="" />
          </div>
      </div>


    </div>

  )
}

export default Card
