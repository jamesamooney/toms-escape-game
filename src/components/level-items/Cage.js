import cage from "../../images/items/cage-3.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchBlueprint } from "../pouch-items/PouchBlueprint"

export const Cage = () => {
  const { hasBlueprint, setHasBlueprint } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const clickCage = () => {
    setPouch([...pouch, <PouchBlueprint/>])
    setHasBlueprint(true)
    setLogs([...logs, { type:"inform", text: "Look in your Pouch, I've given you a blueprint. You have to find the KEY to my cage, Killer that old grumpy dog is guarding it... read the blueprint it has a trap to deal with him. You'll have to pick up some items for this to work"}])
  }
  return (
    <img className='item' id="cage" onClick={clickCage} src={cage} />
  )
}