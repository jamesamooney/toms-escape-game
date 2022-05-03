// import logo from './logo.svg';
import { Key } from './components/Key'
import { Door } from './components/Door'
import { Padlock } from './components/Padlock'
import { Book } from './components/Book'
import { BookClue } from './components/BookClue'
import { PadlockForm } from './components/PadlockForm'
import { useState } from 'react'
import TextInterface from './components/TextInterface'

import './App.css';

function App() {

  const [padlockClicked, setPadlockClicked] = useState(false)
  const [showBookClue, setShowBookClue] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [logs, setLogs] = useState([<p>message1</p>, <p>message2</p>])

  return (
    <div className= "center">
    <div className="App">
          <p>
            Tom's Escape Game
          </p>
          {passwordCorrect && <Key />}
          <Door />
          <Book bookClick={() => setShowBookClue(!showBookClue)} setLogs={setLogs} />
          {showBookClue && <BookClue />}
          <Padlock padClick={() => setPadlockClicked(!padlockClicked)}/>
          {padlockClicked && <PadlockForm setPasswordCorrect={setPasswordCorrect} />}
      </div>
      <div className = "text-interface">
        Hello
        <TextInterface logs={logs}/>
      </div>

    </div>
  );
}

export default App;
