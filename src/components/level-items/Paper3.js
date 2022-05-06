import { AppContext } from "../../AppContext"
import { PouchPaper3 } from "../pouch-items/PouchPaper3"
import crumpled from "../../images/items/crumpled.png"
import { useContext } from "react"


export const Paper3 = () => {

  const { hasPaper3, setHasPaper3 } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabPaper3 = () => {
    setHasPaper3(true)
    setPouch([...pouch, <PouchPaper3 />])
    setLogs([...logs, <p>Maybe you should uncrumple the paper mouse boy</p>])
  }

  return (
    <div>
      <img src={crumpled} className="item" id="paper-3" onClick={grabPaper3}/>
    </div>
  )
}
