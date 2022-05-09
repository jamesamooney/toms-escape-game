import detonator from "../../images/items/detonator.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const PouchDetonator = () => {

  const { logs, setLogs } = useContext(AppContext)

  const detonatorClue = () => {
    
    setLogs([...logs, { type:"pouch-item", text: "You could use this to blow up said shit"}])

  }

  return (
      <img className='item' id="pouch-detonator" src={detonator} onClick={detonatorClue} style={{ height: '40px'}}/>
  )
}
