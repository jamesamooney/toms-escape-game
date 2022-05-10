import cage from "../../images/items/cage-3.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchBlueprint } from "../pouch-items/PouchBlueprint"

export const Cage = () => {
  const { hasBlueprint, setHasBlueprint } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const clickCage = () => {
    if (!hasBlueprint) {
    setPouch([...pouch, <PouchBlueprint/>])
    setHasBlueprint(true)
    setLogs([...logs, { type:"inform", text: "Tom: Look in your pouch, I've given you a blueprint with some clues! You have to find the key to my cage, but that grumpy old dog Spike is guarding it."}])
   } else {
    setLogs([...logs, { type:"inform", text: "Tom: Look in your pouch, I've given you a blueprint with some clues! You have to find the key to my cage, but that grumpy old dog Spike is guarding it."}])
   }
  }
  
  return (
    <img className='item' id="cage" onClick={clickCage} src={cage} />
  )
}