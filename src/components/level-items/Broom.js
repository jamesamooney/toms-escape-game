import broom from "../../images/items/broom.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchBroom } from "../pouch-items/PouchBroom"

export const Broom = () => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasBroom, setHasBroom} = useContext(AppContext)

  const grabBroom = () => {
    setHasBroom(true)
    setPouch([...pouch, <PouchBroom key="broom"/>])
    setLogs([...logs, { type:"inform", text: "You sure could extend your reach with this long broom. A power reach, you might say..."}])

  }

  return (
    <div>
      <img src={broom}
      id="broom" 
      className="item"
      onClick={grabBroom}
      />
    </div>
  )
}