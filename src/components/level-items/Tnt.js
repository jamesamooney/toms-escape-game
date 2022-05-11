import tnt from "../../images/items/dynamite.png"
import { PouchTnt } from "../pouch-items/PouchTnt"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Tnt = ({ setHasTnt }) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext)
  const { detonatorAudioPlayed, setDetonatorAudioPlayed } = useContext(AppContext)

  const grabTnt = () => {
    setHasTnt(true)
    setPouch([...pouch, <PouchTnt key="tnt"/>])
    setLogs([...logs, { type:"inform", text: "Dynamite! Careful now..."}])
  }
  return (isTrapLaid && !detonatorAudioPlayed) ? 
  (<img className="item" id="tnt-outside" src={tnt} />)
    :
  (<img className='item' id="tnt-basement" onClick={grabTnt} src={tnt} />)
}