import key from "../../images/items/key.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import { PouchKey } from "../pouch-items/PouchKey"

export const Key = ( { setHasKeyOne}) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const grabKey = () => {
    setHasKeyOne(true)
    setPouch([...pouch, <PouchKey />])
    setLogs([...logs, <p>You picked up the key, want to bet it opens that lovely door?</p>])
  }
  return (
    <img className='item' id="key" onClick={grabKey} src={key} style={{ height: '60px'}}/>
  )
}