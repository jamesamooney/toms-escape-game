import noteA from "../../images/items/note-A.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import paperCrumpuling from "../audio/paperCrumpuling.wav"

export const PouchPaper3 = () => {

  const { logs, setLogs } = useContext(AppContext)

  const playAudioPaperCrumpuling = () => {
    new Audio(paperCrumpuling).play();
  }

  const paperClue = () => {
    playAudioPaperCrumpuling();
    setLogs([...logs, { type:"pouch-item", text: "Scribbled on the note is the letter: A"}])
  }
  
  return (
      <img className='item' id="pouch-paper-3" src={noteA} onClick={paperClue} style={{ height: '40px'}}/>
  )
}