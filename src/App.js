// import logo from './logo.svg';
import { Key } from './components/Key'
import { Door } from './components/Door'
import { Padlock } from './components/Padlock'
import { PadlockForm } from './components/PadlockForm'
import { useState } from 'react'

import './App.css';

function App() {

  const [padlockClicked, setPadlockClicked] = useState(false)

  return (
    <div className="App">
        <p>
          Tom's Escape Game
        </p>
        <Key />
        <div ><Door /></div>
      <Padlock padClick={() => setPadlockClicked(!padlockClicked)} showForm={padlockClicked}/>
        {padlockClicked && <PadlockForm />}
    </div>
  );
}

export default App;
