import detonator from "../../images/items/detonator.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const PouchDetonator = () => {

  const { logs, setLogs } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext)

  const detonatorClue = () => {
    
    setLogs([...logs, { type:"pouch-item", text: "You could trigger some kind of explosion with this..."}])

  }

  return isTrapLaid ?
    (<></>)
    :
    (<img className='item' id="pouch-detonator" src={detonator} onClick={detonatorClue} style={{ height: '40px'}}/>)
}
