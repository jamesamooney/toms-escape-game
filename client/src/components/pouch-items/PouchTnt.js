import tnt from "../../images/items/dynamite.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const PouchTnt = () => {

  const { logs, setLogs } = useContext(AppContext)
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext)

  const tntInfo = () => {
    
    setLogs([...logs, { type:"pouch-item", text: "Let's blow some stuff up"}])

  }

  return isTrapLaid ? (
    (<></>)
    )
    :
    <img className='item' id="pouch-tnt" src={tnt} onClick={tntInfo} style={{ height: '40px'}}/>
}

