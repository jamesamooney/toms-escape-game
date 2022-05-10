import closedChest from "../../images/items/closedChest.png"
import openChest from "../../images/items/openChest.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import closedChestSound from "../audio/closedChest.wav"
import openChestSound from "../audio/openChest.wav"

export const Chest = () => {
  const { logs, setLogs } = useContext(AppContext)

  const { chestUnlocked, setChestUnlocked, setChestOpen } = useContext(AppContext)
  const { hasChestKey, setHasChestKey } = useContext(AppContext)
  
  const playAudioClosedChest = () => {
    new Audio(closedChestSound).play();
  }
  
  const playAudioOpenChest = () => {
    new Audio(openChestSound).play();
  }

  const clickChest = () => {
    if (hasChestKey === true) {
      playAudioOpenChest()
      setChestUnlocked(true)
      setChestOpen(true)
    }
    playAudioClosedChest()
    setLogs([...logs, { type:"inform", text: !hasChestKey ? "A treasure chest! It's locked though, so you'll never know what treasures it holds." : "You unlocked the chest!"}])
  }
  
  return chestUnlocked ? (
    <img className='item' id="chest" onClick={clickChest} src={openChest} />
    ) : (
    <img className='item' id="chest" onClick={clickChest} src={closedChest} />
  )
}