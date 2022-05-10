import shovel from "../../images/items/shovel.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchShovel = () => {

  const { logs, setLogs } = useContext(AppContext)

  const shovelClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Come on, figure this one out yourself.."}])

  }

  return (
      <img className='item' id="pouch-shovel" src={shovel} onClick={shovelClue} style={{ height: '40px' }}/>
  )
}

