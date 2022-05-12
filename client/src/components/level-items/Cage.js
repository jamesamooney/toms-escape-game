import cage from "../../images/items/cage-3.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchBlueprint } from "../pouch-items/PouchBlueprint"
import cellDoorSFX from "../audio/cellDoor.mp3"
import freedTomSFX from "../audio/freedTom.wav"

export const Cage = () => {
  const { hasBlueprint, setHasBlueprint } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasTomsKey, setHasTomsKey } = useContext(AppContext)
  const { tomIsFree, setTomIsFree } = useContext(AppContext)

  const playAudioCellDoorSFX = () => {
    new Audio(cellDoorSFX).play()
  }

  const clickCage = () => {
    if (!hasBlueprint && !hasTomsKey) {
    setPouch([...pouch, <PouchBlueprint/>])
    setHasBlueprint(true)

    setLogs([...logs, { type:"inform", text: "Tom: Look in your Pouch, I've given you a blueprint. You have to find the KEY to my cage. Spike.. or as he prefers to be known.. Killer, that old, grumpy dog is guarding it.. The blueprint should give you some clues!"}])
   } else if (hasTomsKey && !tomIsFree) {
    setLogs([...logs, { type:"inform", text: "Tom: You did it Jerry, you bloody gone and done it! Now let's get outta here!"}])
      setTomIsFree(true) 
    new Audio(freedTomSFX).play()
      
   } else if (tomIsFree) { 
    setLogs([...logs, { type:"inform", text: "Tom: I'm down here, stop looking at that cage, let's go!"}])
   } else {
    playAudioCellDoorSFX()
    setLogs([...logs, { type:"inform", text: "Tom: Look in your pouch, I've given you a blueprint with some clues! You have to find the key to my cage, but that grumpy old dog Spike is guarding it."}])
   }
  }
  
  return (
    <img className='item' id="cage" onClick={clickCage} src={cage} />
  )
}