import { Key } from '../level-items/Key'
import { Door } from '../level-items/Door'
import { Padlock } from '../level-items/Padlock'
import { Book } from '../level-items/Book'
import { PadlockForm } from '../level-items/PadlockForm'
import { PowerSwitch } from '../level-items/PowerSwitch'
import { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'


import '../../App.css';
import { Armour } from '../level-items/Armour'

export const LevelOne = ({ setPlayerLocation, logs, setLogs }) => {

  const [isPadlockClicked, setPadlockClicked] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)
  const { hasBook, setHasBook } = useContext(AppContext)
  const { isPadlockSolved, setPadlockSolved } = useContext(AppContext)
  const { doorOneOpen, setDoorOneOpen } = useContext(AppContext)
  
  return (
    <div className="App">
        {(passwordCorrect && !hasKeyOne) && <Key
        setHasKeyOne={setHasKeyOne}
        />}
        <Door
        setDoorOneOpen={setDoorOneOpen}
        doorOneOpen={doorOneOpen}
        hasKeyOne={hasKeyOne}
        setPlayerLocation={setPlayerLocation}
      />
      <PowerSwitch />
      <Armour/>
        {!hasBook && <Book 
        setHasBook={setHasBook}
        logs={logs}
        setLogs={setLogs}/>}
        {!isPadlockSolved && <Padlock isPadlockClicked={isPadlockClicked} setPadlockClicked={setPadlockClicked}/>}
      {isPadlockClicked && <PadlockForm
        setPasswordCorrect={setPasswordCorrect}
        setPadlockClicked={setPadlockClicked}
        isPadlockClicked={isPadlockClicked}
        setPadlockSolved={setPadlockSolved}
      />}
    </div>
  );
}