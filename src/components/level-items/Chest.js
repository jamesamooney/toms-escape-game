import closedChest from "../../images/items/closedChest.png"
import openChest from "../../images/items/openChest.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Chest = () => {
  const { logs, setLogs } = useContext(AppContext)

  const { chestOpen, setChestOpen } = useContext(AppContext)

  const hasChestKey = false

  const clickChest = () => {
    if (hasChestKey === true) {
      setChestOpen(true)
    }
    setLogs([...logs, { type:"inform", text: "A treasure chest! It's locked though, so you'll never know what treasures it holds."}])
  }
  return chestOpen ? (
    <img className='item' id="chest" onClick={clickChest} src={openChest} />
    ) : (
    <img className='item' id="chest" onClick={clickChest} src={closedChest} />
  )
}