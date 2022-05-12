import noteR from "../../images/items/note-R.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import paperCrumpuling from "../audio/paperCrumpuling.wav"

export const PouchPaper2 = () => {

  const { logs, setLogs } = useContext(AppContext)

  const playAudioPaperCrumpuling = () => {
    new Audio(paperCrumpuling).play();
  }
  
  const paperClue = () => {
    playAudioPaperCrumpuling();
    setLogs([...logs, { type:"pouch-item", text: "Scribbled on the note is the letter: R"}])
  }

  return (
      <img className='item' id="pouch-paper-2" src={noteR} onClick={paperClue} style={{ height: '40px'}}/>
  )
}