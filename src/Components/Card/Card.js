import React from 'react'
import Button from '../Button/Button'

function Card({title, price, Image}) {
  return (
    <div>
      <div>
        <span></span>
        <div>
            <img src={Image} alt={title}/>
        </div>
        <h4>
          {title} <span> {price}</span>
        </h4>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  )
}

export default Card
