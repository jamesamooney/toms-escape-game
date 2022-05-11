import tomsKey from '../../images/items/tomsKey.png';
import { PouchTomsKey } from "../pouch-items/PouchTomsKey"
import { AppContext } from "../../AppContext";
import { useContext } from "react";

export const TomsKey = () => {
  const { logs, setLogs } = useContext(AppContext);
  const { isKillerDefeated, setIsKillerDefeated } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { hasTomsKey, setHasTomsKey } = useContext(AppContext)


  const clickKey = () => {
    if (isKillerDefeated) {
      setPouch([...pouch, <PouchTomsKey key={tomsKey}/>])
      setLogs([...logs, { type:"success", text: "You found Tom's key!"}])
      setHasTomsKey(true)
    } else {
      setLogs([...logs, { type:"inform", text: "That's Tom's key, alright, but Spike won't let you anywhere near it..."}])
    }
  }

  return (
    <img id="toms-key" className="item" src={tomsKey} onClick={clickKey}/>
  )
}

