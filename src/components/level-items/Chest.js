import closedChest from "../../images/items/closedChest.png"
import openChest from "../../images/items/openChest.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Chest = () => {
  const { logs, setLogs } = useContext(AppContext)

  const { chestUnlocked, setChestUnlocked, setChestOpen } = useContext(AppContext)
  const { hasChestKey, setHasChestKey } = useContext(AppContext)
  

  const clickChest = () => {
    if (hasChestKey === true) {
      setChestUnlocked(true)
      setChestOpen(true)
    }
    setLogs([...logs, { type:"inform", text: "A treasure chest! It's locked though, so you'll never know what treasures it holds."}])
  }
  return chestUnlocked ? (
    <img className='item' id="chest" onClick={clickChest} src={openChest} />
    ) : (
    <img className='item' id="chest" onClick={clickChest} src={closedChest} />
  )
}