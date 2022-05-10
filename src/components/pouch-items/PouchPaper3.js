import noteA from "../../images/items/note-A.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchPaper3 = () => {

  const { logs, setLogs } = useContext(AppContext)

  const paperClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Scribbled on the note is the letter: A"}])

  }
  return (
      <img className='item' id="pouch-paper-3" src={noteA} onClick={paperClue} style={{ height: '40px'}}/>
  )
}