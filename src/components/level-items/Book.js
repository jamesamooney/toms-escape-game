import book from "../../images/items/book.png"
import { PouchBook } from "../pouch-items/PouchBook"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import bookSound from "../audio/book.wav"

export const Book = () => {
  const { pouch, setPouch } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)
  const { hasBook, setHasBook } = useContext(AppContext)

  const playAudioBook = () => {
    new Audio(bookSound).play();
  }
  
  const grabBook = () => {
    playAudioBook();
    setHasBook(true);
    setPouch([...pouch, <PouchBook key="pouch-book" />])
    setLogs([...logs,{ type: "inform", text: "You picked a dusty ol' book, what could possibly be written inside?"}])
  }

  return (
    <div>
      <img className='item' id="book" data-testid="book" src={book} onClick={grabBook} style={{ height: '60px'}}/>
    </div>
  )
}

