import { AppContext } from '../../AppContext'
import { useContext } from "react"
import stickyNote from '../../images/items/stickynote.png'

export const StickyNote = () => {

  const { logs, setLogs } = useContext(AppContext)

  const stickyNoteClick = () => {
    setLogs([...logs, { type:"inform", text: "If Spike doesn't wake up for his food, you could always try ringing his bell..."}])
  }
  
  return (
    <img src={stickyNote} id='sticky-note' className='item' onClick={stickyNoteClick} />
  )
}
