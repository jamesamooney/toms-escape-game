import broom from "../../images/items/broom.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchBroom = () => {

  const { logs, setLogs } = useContext(AppContext)

  const broomClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Looks like this broom could help with objects out of reach"}])

  }

  return (
      <img className='item' id="pouch-broom" src={broom} onClick={broomClue} style={{ height: '40px'}}/>
  )
}
