import { AppContext } from "../../AppContext"
import { PouchPaper5 } from "../pouch-items/PouchPaper5"
import crumpled from "../../images/items/crumpled.png"
import { useContext } from "react"


export const Paper5 = () => {

  const { hasPaper5, setHasPaper5 } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabPaper5 = () => {
    setHasPaper5(true)
    setPouch([...pouch, <PouchPaper5 />])
    setLogs([...logs, <p>Maybe you should uncrumple the paper mouse boy</p>])
  }

  return (
    <div>
      <img data-testid="paper-5" src={crumpled} className="item" id="paper-5" onClick={grabPaper5}/>
    </div>
  )
}
