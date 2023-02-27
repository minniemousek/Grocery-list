import './App.css';
import { GroceryList } from './GroceryList';
import image from './shopping.jpg';
import imageTwo from './worker.jpg';

function App() {
  return (
    <div>
      <div className='app'>
        <div className='container'>
          <img src={ image } alt="shopping" width="200px" />
        </div>
        <div className='container'>
          <h1>Grocery List</h1>
        </div>
        <GroceryList/>
        <div className='container'>
          <img src={ imageTwo } alt="worker" width="200px" />
        </div>
      </div>
    </div>
  );
}

export default App;
