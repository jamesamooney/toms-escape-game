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
    setPouch([...pouch, <PouchPaper3 key="paper-3"/>])
    setLogs([...logs, { type:"inform", text: "Give that crumpled paper a ruddy good uncrumpling!"}])

  }

  return (
    <div>
      <img src={crumpled} className="item" id="paper-3" onClick={grabPaper3}/>
    </div>
  )
}
