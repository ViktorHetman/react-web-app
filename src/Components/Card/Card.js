import React from 'react'
import Button from '../Button/Button'
import styles from './Card.module.css'

function Card({title, price, Image}) {
  return (
    <div className={styles.card}>
        <span></span>
        <div className={styles.image_container}>
            <img src={Image} alt={title}/>
        </div>
        <h4 className={styles.card_title}>
          {title} <span> {price}</span>
        </h4>
        <div className={styles.btn}>
          <button>+</button>
          <button>-</button>
        </div>  
    </div>
  )
}

export default Card
