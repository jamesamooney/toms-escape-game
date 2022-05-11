import tnt from "../../images/items/dynamite.png"
import { PouchTnt } from "../pouch-items/PouchTnt"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Tnt = ( { setHasTnt } ) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabTnt = () => {
    setHasTnt(true)
    setPouch([...pouch, <PouchTnt key="tnt"/>])
    setLogs([...logs, { type:"inform", text: "Dynamite! Careful now..."}])
  }
  return (
    <img className='item' id="tnt" onClick={grabTnt} src={tnt}/>
  )
}