import key from "../../images/items/key.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchKey = () => {

  const { logs, setLogs } = useContext(AppContext)

  const keyClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Looks like it would fit in a door"}])

  }

  return (
      <img className='item' id="pouch-key" src={key} onClick={keyClue} style={{ height: '40px'}}/>
  )
}

