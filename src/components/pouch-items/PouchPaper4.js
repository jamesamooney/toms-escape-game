import paper from "../../images/items/paper.jpeg"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchPaper4 = () => {
  const { logs, setLogs } = useContext(AppContext)

  const paperClue = () => {
    setLogs([...logs, <p>C</p>])
  }
  return (
      <img className='item' id="pouch-paper-4" src={paper} onClick={paperClue} style={{ height: '40px'}}/>
  )
}