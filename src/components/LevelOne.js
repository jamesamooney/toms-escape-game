import { Key } from './Key'
import { Door } from './Door'
import { Padlock } from './Padlock'
import { Book } from './Book'
import { BookClue } from './BookClue'
import { PadlockForm } from './PadlockForm'
import { useState } from 'react'

import '../App.css';

export const LevelOne = ({ setLevelOneComplete }) => {
  const [padlockClicked, setPadlockClicked] = useState(false)
  const [showBookClue, setShowBookClue] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)

  return (
    <div className="App">
        {passwordCorrect && <Key setHasKeyOne={setHasKeyOne}/>}
        <Door setDoorOneOpen={setDoorOneOpen} doorOneOpen={doorOneOpen} hasKeyOne={hasKeyOne} setLevelOneComplete={setLevelOneComplete} />
        <Book bookClick={() => setShowBookClue(!showBookClue)} />
        {showBookClue && <BookClue />}
        <Padlock padClick={() => setPadlockClicked(!padlockClicked)}/>
        {padlockClicked && <PadlockForm setPasswordCorrect={setPasswordCorrect} />}
    </div>
  );
}