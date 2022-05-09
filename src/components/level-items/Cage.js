import cage from "../../images/items/cage-3.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const Cage = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickCage = () => {
    setLogs([...logs, { type:"inform", text: "Tom's pretty fucked mate"}])
  }
  return (
    <img className='item' id="cage" onClick={clickCage} src={cage} />
  )
}