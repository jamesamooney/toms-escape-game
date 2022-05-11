import { AppContext } from "../../AppContext"
import { PouchPaper2 } from "../pouch-items/PouchPaper2"
import crumpled from "../../images/items/crumpled.png"
import { useContext } from "react"
import paperCrumpuling from "../audio/paperCrumpuling.wav"

export const Paper2 = () => {

  const { hasPaper2, setHasPaper2 } = useContext(AppContext)
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const playAudioPaperCrumpuling = () => {
    new Audio(paperCrumpuling).play();
  }

  const grabPaper2 = () => {
    playAudioPaperCrumpuling();
    setHasPaper2(true)
    setPouch([...pouch, <PouchPaper2 key="paper-2"/>])
    setLogs([...logs, { type:"inform", text: "Give that crumpled paper a ruddy good uncrumpling!"}])

  }

  return (
    <div>
      <img src={crumpled} className="item" id="paper-2" data-testid="paper-2" onClick={grabPaper2}/>
    </div>
  )
}
