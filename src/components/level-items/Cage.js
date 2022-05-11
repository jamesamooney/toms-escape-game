import cage from "../../images/items/cage-3.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchBlueprint } from "../pouch-items/PouchBlueprint"
import cellDoorSFX from "../audio/cellDoor.mp3"

export const Cage = () => {
  const { hasBlueprint, setHasBlueprint } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const playAudioCellDoorSFX = () => {
    new Audio(cellDoorSFX).play()
  }

  const clickCage = () => {
    if (!hasBlueprint) {
    setPouch([...pouch, <PouchBlueprint/>])
    setHasBlueprint(true)
    setLogs([...logs, { type:"inform", text: "Tom: Look in your Pouch, I've given you a blueprint. You have to find the KEY to my cage. Spike.. or as he prefers to be known.. Killer, that old, grumpy dog is guarding it.. The blueprint should give you some clues!"}])
   } else {
    playAudioCellDoorSFX()
    setLogs([...logs, { type:"inform", text: "Tom: Look in your Pouch, I've given you a blueprint. You have to find the KEY to my cage. Spike.. or as he prefers to be known.. Killer, that old, grumpy dog is guarding it.. The blueprint should give you some clues!"}])
   }
  }
  
  return (
    <img className='item' id="cage" onClick={clickCage} src={cage} />
  )
}