import key from "../../images/items/key.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchKey } from "../pouch-items/PouchKey"
import keysJingle from "../audio/keysJingle.mp3"

export const Key = ( { setHasKeyOne } ) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const playAudioKeysJingle = () => {
    new Audio(keysJingle).play();
  }

  const grabKey = () => {
    playAudioKeysJingle()
    setHasKeyOne(true)
    setPouch([...pouch, <PouchKey key="key"/>])
    setLogs([...logs, { type:"inform", text: "You picked up the key, want to bet it opens that lovely door?"}])
  }
  return (
    <img className='item' id="key" onClick={grabKey} src={key} style={{ height: '60px'}}/>
  )
}