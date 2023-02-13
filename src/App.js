import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card'
import Cart from './Components/Сart/Cart'
import data from './db/db'

const foods = data

function App() {
  const [cartItems, setCartItems] = useState([])

  const onAdd = (food) => {
    const exist = cartItems.find((e) => e.id === food.id)
    if (exist) {
      setCartItems(cartItems.map(e => {
        return e.id === food.id ? {...exist, quantity: exist.quantity +1 } : e
      }))
    } else {
      setCartItems([...cartItems, {...food, quantity: 1}])
    }
  }

  const onRemove = (food) => {
    const exist = cartItems.find((e) => e.id === food.id)
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((e) => e.id !== food.id))
    } else {
      setCartItems(cartItems.map(e => {
       return e.id === food.id ? {...exist, quantity: exist.quantity - 1} : e
      }))
    }
  }


  return (
    <div className="App">
      <h1 className="heading">Зробити замовлення</h1>
      <Cart cartItems={cartItems}/>
      <div className="cards_container">
        {foods.map((food) => {
          return <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove}/>
        })}
      </div>
    </div>
  )
}

export default App
