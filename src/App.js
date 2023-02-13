import './App.css';
import Card from './Components/Card/Card';
import data from './db/db'

const foods = data

function App() {
  return (
    <div className="App">
        <div>
          {foods.map((food) => {
            return <Card key={food.id} {...food}/>
          })}
        </div>
    </div>
  );
}

export default App;
