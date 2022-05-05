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
    setPouch([...pouch, <PouchBroom />])
    setLogs([...logs, <p>This broom is very long and hard... I betcha could reach anything with this!</p>])

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