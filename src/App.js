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

  return (
    <div className="App">
        <p>
          Tom's Escape Game
        </p>
        <Key />
        <Door />
        <Book bookClick={() => setShowBookClue(!showBookClue)} />
        {showBookClue && <BookClue />}
        <Padlock padClick={() => setPadlockClicked(!padlockClicked)}/>
        {padlockClicked && <PadlockForm />}
    </div>
  );
}

export default App;
