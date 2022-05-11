import key from "../../images/items/key.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import keysJingle from "../audio/keysJingle.mp3"

export const PouchKey = () => {

  const { logs, setLogs } = useContext(AppContext)

  const playAudioKeysJingle = () => {
    new Audio(keysJingle).play();
  }

  const keyClue = () => {
    playAudioKeysJingle()
    setLogs([...logs, { type:"pouch-item", text: "Looks like it would fit in a door"}])
  }

  return (
      <img className='item' id="pouch-key" src={key} onClick={keyClue} style={{ height: '40px'}}/>
  )
}

