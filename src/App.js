import './App.css';
import Card from './Components/Card/Card';
import data from './db/db'

const foods = data

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Зробити замовлення</h1>
        <div className='cards_container'>
          {foods.map((food) => {
            return <Card key={food.id} {...food}/>
          })}
        </div>
    </div>
  );
}

export default App;
