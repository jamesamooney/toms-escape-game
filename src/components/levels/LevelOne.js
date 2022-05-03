import { Key } from '../level-items/Key'
import { Door } from '../level-items/Door'
import { Padlock } from '../level-items/Padlock'
import { Book } from '../level-items/Book'
import { BookClue } from '../level-items/BookClue'
import { PadlockForm } from '../level-items/PadlockForm'
import { useState } from 'react'


import '../../App.css';

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