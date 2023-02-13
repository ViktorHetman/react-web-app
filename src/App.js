import { useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Сart/Cart';
import data from './db/db'

const foods = data

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      <h1 className='heading'>Зробити замовлення</h1>
      <Cart/>
        <div className='cards_container'>
          {foods.map((food) => {
            return <Card key={food.id} {...food}/>
          })}
        </div>
    </div>
  );
}

export default App;
