import { Key } from './Key'
import { Door } from './Door'
import { Padlock } from './Padlock'
import { Book } from './Book'
import { BookClue } from './BookClue'
import { PadlockForm } from './PadlockForm'
import { useState } from 'react'


import '../App.css';

export const LevelOne = ({ setLevelOneComplete, logs, setLogs }) => {

  const [isPadlockClicked, setPadlockClicked] = useState(false)
  const [showBookClue, setShowBookClue] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)

  const bookClicked = () => {
    setShowBookClue(!showBookClue)
    setLogs([...logs, <p>Book has been clicked</p>])
    
  }

  const padlockClicked = () => {
    setPadlockClicked(!isPadlockClicked)
    setLogs([...logs, <p>Padlock has been clicked</p>])
  }


  return (
    <div className="App">
        {passwordCorrect && <Key setHasKeyOne={setHasKeyOne}/>}
        <Door setDoorOneOpen={setDoorOneOpen} doorOneOpen={doorOneOpen} hasKeyOne={hasKeyOne} setLevelOneComplete={setLevelOneComplete} />
        <Book bookClick={() => bookClicked()} />
        {showBookClue && <BookClue />}
        <Padlock padClick={() => padlockClicked()}/>
        {isPadlockClicked && <PadlockForm setPasswordCorrect={setPasswordCorrect} />}
    </div>
  );
}