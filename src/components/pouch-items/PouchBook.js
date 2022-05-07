import book from "../../images/items/book.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"


export const PouchBook = () => {
  const { logs, setLogs } = useContext(AppContext)

  const clickPouchBook = () => {
    setLogs([...logs, { type:"pouch-item", text: "This is placeholder for the spike clue"}])
    
  }
  return (
      <img className='item' id="pouch-book" onClick={clickPouchBook} src={book} style={{ height: '40px'}}/>
  )
}