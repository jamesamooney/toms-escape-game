import paper from "../../images/items/paper.jpeg"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchPaper3 = () => {

  const { logs, setLogs } = useContext(AppContext)

  const paperClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Scribbled on the note is the letter: A"}])

  }
  return (
      <img className='item' id="pouch-paper-3" src={paper} onClick={paperClue} style={{ height: '40px'}}/>
  )
}