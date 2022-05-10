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
    setLogs([...logs, { type:"inform", text: "This broom is very long and hard... I betcha could reach anything with this!"}])

  }

  return (
    <div>
      <img src={broom}
      id="broom" 
      data-testid="broom"
      className="item"
      onClick={grabBroom}
      />
    </div>
  )
}