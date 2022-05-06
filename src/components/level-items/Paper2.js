import { AppContext } from "../../AppContext"
import { PouchPaper2 } from "../pouch-items/PouchPaper2"
import crumpled from "../../images/items/crumpled.png"
import { useContext } from "react"


export const Paper2 = () => {

  const { hasPaper2, setHasPaper2 } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabPaper2 = () => {
    setHasPaper2(true)
    setPouch([...pouch, <PouchPaper2 />])
    setLogs([...logs, <p>Maybe you should uncrumple the paper mouse boy</p>])
  }

  return (
    <div>
      <img src={crumpled} className="item" id="paper-2" onClick={grabPaper2}/>
    </div>
  )
}
