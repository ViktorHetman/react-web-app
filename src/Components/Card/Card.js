import React, {useState} from 'react'
import Button from '../Button/Button'
import styles from './Card.module.css'

function Card({title, price, Image}) {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count+1)
  }
 
  const handleDecrement = () => {
    setCount(count-1)
  }

  return (
    <div className={styles.card}>
        <span>{count}</span>
        <div className={styles.image_container}>
            <img src={Image} alt={title}/>
        </div>
        <h4 className={styles.card_title}>
          {title} <span> {price}</span>
        </h4>
        <div className={styles.btn}>
          <Button title={'+'} type={'add'} handleIncrement={handleIncrement}/>
          {!!count ?(<Button title={'-'} type={'revmove'} handleDecrement={handleDecrement}/>) : ''}
        </div>  
    </div>
  )
}

export default Card
