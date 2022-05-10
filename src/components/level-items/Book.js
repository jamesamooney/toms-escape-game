import book from "../../images/items/book.png"
import { PouchBook } from "../pouch-items/PouchBook"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const Book = ({ setHasBook }) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  
  const grabBook = () => {
    setHasBook(true)
    setPouch([...pouch, <PouchBook key={book}/>])
    setLogs([...logs,{ type: "inform", text: "You picked up a dusty old book. What could be written inside?"}])
  }

  return (
    <div>
      <img className='item' id="book" src={book} onClick={grabBook} style={{ height: '60px'}}/>
    </div>
  )
}

