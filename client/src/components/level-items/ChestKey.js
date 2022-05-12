import chestKey from "../../images/items/chestKey.png"
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { PouchChestKey } from "../pouch-items/PouchChestKey";
import keysJingle from "../audio/keysJingle.mp3"

export const ChestKey = () => {

  const { logs, setLogs } = useContext(AppContext)
  const { hasChestKey, setHasChestKey } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)

  const playAudioKeysJingle = () => {
    new Audio(keysJingle).play();
  }

  const clickChestKey = () => {
    playAudioKeysJingle()
    setLogs([...logs, { type:"inform", text: "You found a rusty old key!"}])
    setHasChestKey(true)
    setPouch([...pouch, <PouchChestKey key="chestKey"/>])
  }

  return (
    <img id="chest-key" className="item"  src={chestKey} onClick={clickChestKey} />
    
  )
}
