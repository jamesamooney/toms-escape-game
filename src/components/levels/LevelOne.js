import { Key } from '../level-items/Key'
import { Door } from '../level-items/Door'
import { Padlock } from '../level-items/Padlock'
import { Book } from '../level-items/Book'
import { PadlockForm } from '../level-items/PadlockForm'
import { PowerSwitch } from '../level-items/PowerSwitch'
import { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'
import { Paper4 } from "../level-items/Paper4"
import { Paper5 } from "../level-items/Paper5"
import { Shovel } from '../level-items/Shovel'


import '../../App.css';
import { Armour } from '../level-items/Armour'

export const LevelOne = () => {

  const [isPadlockClicked, setPadlockClicked] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)
  const { hasBook, setHasBook } = useContext(AppContext)
  const { isPadlockSolved, setPadlockSolved } = useContext(AppContext)
  const { doorOneOpen, setDoorOneOpen } = useContext(AppContext)
  const { hasPaper4, setHasPaper4 } = useContext(AppContext)
  const { hasPaper5, setHasPaper5 } = useContext(AppContext)
  const { hasShovel, setHasShovel } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  
  return (
    <div className="level-one">
        {(passwordCorrect && !hasKeyOne) && <Key
        setHasKeyOne={setHasKeyOne}
        />}
        <Door
        setDoorOneOpen={setDoorOneOpen}
        doorOneOpen={doorOneOpen}
        hasKeyOne={hasKeyOne}
        
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
      {!hasPaper4 && <Paper4  />}
      {!hasPaper5 && <Paper5 />}
      {!hasShovel && <Shovel />}
    </div>
  );
}