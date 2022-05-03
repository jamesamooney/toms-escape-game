// import logo from './logo.svg';
import { Key } from './components/Key'
import { Door } from './components/Door'
import { Padlock } from './components/Padlock'
import { Book } from './components/Book'
import { BookClue } from './components/BookClue'
import { PadlockForm } from './components/PadlockForm'
import { useState, useRef } from 'react'
import TextInterface from './components/TextInterface'

import './App.css';

function App() {
  const messagesEnd = useRef(null)

  const [isPadlockClicked, setPadlockClicked] = useState(false)
  const [showBookClue, setShowBookClue] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [logs, setLogs] = useState([<p>message1</p>, <p>message2</p>])

  const bookclicked = () => {
    setShowBookClue(!showBookClue)
    setLogs([...logs, <p>Book has been clicked</p>])
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  }

  const padlockClicked = () => {
    setPadlockClicked(!padlockClicked)
    setLogs([...logs, <p>Padlock has been clicked</p>])
    messagesEnd.current?.scrollIntoView({ behavior: "smooth"})
  }

  return (
    <div className= "center">
    <div className="App">
          <p>
            Tom's Escape Game
          </p>
          {passwordCorrect && <Key />}
          <Door />
          <Book bookClick={() => bookclicked()} />
          {showBookClue && <BookClue />}
          <Padlock padClick={() => padlockClicked()}/>
          {isPadlockClicked && <PadlockForm setPasswordCorrect={setPasswordCorrect} />}
      </div>
      <div className = "text-interface">
        <TextInterface logs={logs}/>
        <div ref={messagesEnd} style={{height: "20px"}}></div>
      </div>

    </div>
  );
}

export default App;
