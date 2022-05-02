// import logo from './logo.svg';
import { Key } from './components/Key'
import { Door } from './components/Door'
import { Padlock } from './components/Padlock'
import './App.css';

function App() {
  return (
    <div className="App">
        <p>
          Tom's Escape Game
        </p>
        <Key />
        <Door />
        <Padlock />
    </div>
  );
}

export default App;
