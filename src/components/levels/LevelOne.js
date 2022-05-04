import { Key } from '../level-items/Key'
import { Door } from '../level-items/Door'
import { Padlock } from '../level-items/Padlock'
import { Book } from '../level-items/Book'
import { PadlockForm } from '../level-items/PadlockForm'
import { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'


import '../../App.css';
import Armour from '../level-items/Armour'

export const LevelOne = ({ setPlayerLocation, logs, setLogs }) => {

  const [isPadlockClicked, setPadlockClicked] = useState(false)
  const [isPadlockSolved, setPadlockSolved] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [doorOneOpen, setDoorOneOpen] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)
  const [hasBook, setHasBook] = useState(false)

  const bookClicked = () => {
    setLogs([...logs, <p>You found a book on the floor, there seems to be scribbles on it, maybe try reading it from your pouch</p>])
    
  }

  const armourClicked = () => {
    setLogs([...logs, <p>Looks like this angry fella won't let you pass</p>])
    
  }

  const padlockClicked = () => {
    setPadlockClicked(!isPadlockClicked)
    setLogs([...logs, <p>You need to insert the correct combination of numbers to open this padlock</p>])

  }

  

  return (
    <div className="App">
        {(passwordCorrect && !hasKeyOne) && <Key
        setHasKeyOne={setHasKeyOne}
        logs={logs}
        setLogs={setLogs}
        />}
        <Door
        setDoorOneOpen={setDoorOneOpen}
        doorOneOpen={doorOneOpen}
        hasKeyOne={hasKeyOne}
        setPlayerLocation={setPlayerLocation}
        logs={logs}
        setLogs={setLogs}
      />
      <Armour armourClick={() => armourClicked()}/>
        {!hasBook && <Book 
        setHasBook={setHasBook}
        logs={logs}
        setLogs={setLogs}/>}
        {!isPadlockSolved && <Padlock padClick={() => padlockClicked()}/>}
      {isPadlockClicked && <PadlockForm
        setPasswordCorrect={setPasswordCorrect}
        setPadlockClicked={setPadlockClicked}
        isPadlockClicked={isPadlockClicked}
        setPadlockSolved={setPadlockSolved}
        logs={logs}
        setLogs={setLogs}
      />}
    </div>
  );
}