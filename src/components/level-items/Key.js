import key from "../../images/items/key.png"
import { useContext } from "react"
import { PouchContext } from "../../PouchContext"
import { PouchKey } from "../pouch-items/PouchKey"

export const Key = ( { setHasKeyOne, logs, setLogs }) => {
  const { pouch, setPouch } = useContext(PouchContext)

  const grabKey = () => {
    setHasKeyOne(true)
    setPouch([...pouch, <PouchKey />])
    setLogs([...logs, <p>You picked up the key, want to bet it opens that lovely door?</p>])
  }
  return (
    <img className='item' id="key" onClick={grabKey} src={key} style={{ height: '60px'}}/>
  )
}