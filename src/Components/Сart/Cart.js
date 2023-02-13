import React from 'react'
import Button from '../Button/Button'
import styles from './Cart.module.css'

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (acc, food) => acc + food.price * food.quantity,
    0
  )

  return (
    <div className={styles.cart_contaier}>
      {!cartItems.length ? 'Ви нічого не вибрали' : <span className={''}>Ціна: {totalPrice}.00 UAH</span>}
      <br />
      
      <Button
        title={`${
          !!cartItems.length ? 'Зробити замволення!' : 'Розрахуватися'
        }`}
        type={'checkout'}
        disable={!!cartItems.length ? true : false}
      />
    </div>
  )
}

export default Cart
