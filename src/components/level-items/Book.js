import book from "../../images/items/book.png"
import { PouchBook } from "../pouch-items/PouchBook"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

export const Book = ({ setHasBook }) => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  
  const grabBook = () => {
    setHasBook(true)
    setPouch([...pouch, <PouchBook />])
    setLogs([...logs, <p>You picked a dusty ol' book, what could possibly be written inside?</p>])
  }

  return (
    <div>
      <img className='item' id="book" role="book-image" src={book} onClick={grabBook} style={{ height: '60px'}}/>
    </div>
  )
}

