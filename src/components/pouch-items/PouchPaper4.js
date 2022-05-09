import noteC from "../../images/items/note-C.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const PouchPaper4 = () => {
  const { logs, setLogs } = useContext(AppContext)

  const paperClue = () => {
    setLogs([...logs, { type:"pouch-item", text: "Scribbled on the note is the letter: C"}])

  }
  return (
      <img className='item' id="pouch-paper-4" src={noteC} onClick={paperClue} style={{ height: '40px'}}/>
  )
}