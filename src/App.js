// import logo from './logo.svg';
import { Key } from './components/Key'
import { Door } from './components/Door'
import { Padlock } from './components/Padlock'
import { Book } from './components/Book'
import { BookClue } from './components/BookClue'
import { PadlockForm } from './components/PadlockForm'
import { useState } from 'react'

import './App.css';

function App() {

  const [padlockClicked, setPadlockClicked] = useState(false)
  const [showBookClue, setShowBookClue] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)

  return (
    <div className="App">
        {passwordCorrect && <Key setHasKeyOne={setHasKeyOne}/>}
        <Door setDoorOneOpen={setDoorOneOpen} doorOneOpen={doorOneOpen} hasKeyOne={hasKeyOne}/>
        <Book bookClick={() => setShowBookClue(!showBookClue)} />
        {showBookClue && <BookClue />}
        <Padlock padClick={() => setPadlockClicked(!padlockClicked)}/>
        {padlockClicked && <PadlockForm setPasswordCorrect={setPasswordCorrect} />}
    </div>
  );
}

export default App;
