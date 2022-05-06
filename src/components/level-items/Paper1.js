import { AppContext } from "../../AppContext"
import { PouchPaper1 } from "../pouch-items/PouchPaper1"
import crumpled from "../../images/items/crumpled.png"
import { useContext } from "react"


export const Paper1 = () => {

  const { hasPaper1, setHasPaper1 } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabPaper1 = () => {
    setHasPaper1(true)
    setPouch([...pouch, <PouchPaper1 />])
    setLogs([...logs, <p>Maybe you should uncrumple the paper mouse boy</p>])
  }

  return (
    <div>
      <img src={crumpled} className="item" id="paper-1" onClick={grabPaper1}/>
    </div>
  )
}
