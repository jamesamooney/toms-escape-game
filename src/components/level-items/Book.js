import book from "../../images/items/book.png"
import { PouchBook } from "../pouch-items/PouchBook"
import { PouchContext } from "../../PouchContext"
import { useContext } from "react"

export const Book = ({ setHasBook, logs, setLogs }) => {
  const { pouch, setPouch } = useContext(PouchContext)
  
  const grabBook = () => {
    setHasBook(true)
    setPouch([...pouch, <PouchBook />])
    setLogs([...logs, <p>You picked a dusty ol' book, what could possibly be written inside?</p>])
  }

  return (
    <div>
      <img className='item' id="book" src={book} onClick={grabBook} style={{ height: '60px'}}/>
    </div>
  )
}

