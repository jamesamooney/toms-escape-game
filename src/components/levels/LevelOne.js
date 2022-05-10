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
import { TomCaged } from "../level-items/TomCaged"
import { Cage } from "../level-items/Cage"
import { Chest } from "../level-items/Chest"
import { Tnt } from "../level-items/Tnt"
import { Detonator } from "../level-items/Detonator"
import { Shovel } from '../level-items/Shovel'



import '../../App.css';
import { Armour } from '../level-items/Armour'

export const LevelOne = ({ setPlayerLocation }) => {


  const [isPadlockClicked, setPadlockClicked] = useState(false)
  const [passwordCorrect, setPasswordCorrect] = useState(false)
  const [hasKeyOne, setHasKeyOne] = useState(false)
  const { hasBook, setHasBook } = useContext(AppContext)
  const { isPadlockSolved, setPadlockSolved } = useContext(AppContext)
  const { doorOneOpen, setDoorOneOpen } = useContext(AppContext)
  const { chestOpen, setChestOpen } = useContext(AppContext)
  const { hasPaper4, setHasPaper4 } = useContext(AppContext)
  const { hasPaper5, setHasPaper5 } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasTnt, setHasTnt } = useContext(AppContext)
  const { hasDetonator, setHasDetonator } = useContext(AppContext)
  const { hasShovel, setHasShovel } = useContext(AppContext)
  const { tomIsFree, setTomIsFree } = useContext(AppContext)


  
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
        />}
        {!isPadlockSolved && <Padlock isPadlockClicked={isPadlockClicked} setPadlockClicked={setPadlockClicked}/>}
        {isPadlockClicked && <PadlockForm
          setPasswordCorrect={setPasswordCorrect}
          setPadlockClicked={setPadlockClicked}
          isPadlockClicked={isPadlockClicked}
          setPadlockSolved={setPadlockSolved}
        />}
      {!hasPaper4 && <Paper4  />}
      {!hasPaper5 && <Paper5  />}
      {!tomIsFree && <TomCaged />}
      <Cage />
      <Chest />
      {(chestOpen && !hasTnt) && <Tnt setHasTnt={setHasTnt}/>}
      {(chestOpen && !hasDetonator) && <Detonator setHasDetonator={setHasDetonator}/>}
      {!hasPaper5 && <Paper5 />}
      {!hasShovel && <Shovel />}
    </div>
  );
}