import tomsKey from "../../images/items/tomsKey.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import keysJingle from "../audio/keysJingle.mp3"

export const PouchTomsKey = () => {
  const { logs, setLogs } = useContext(AppContext)

  const playAudioKeysJingle = () => {
    new Audio(keysJingle).play();
  }

  const clickPouchTomsKey = () => {
    playAudioKeysJingle();
    setLogs([...logs, { type:"pouch-item", text: "This is toms key go get him"}])
  }

  return (
      <img className='item' id="pouch-toms-key" onClick={clickPouchTomsKey} src={tomsKey} style={{ height: '30px'}}/>
  )
}