import book from "../../images/items/book.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
import bookSound from "../audio/book.wav"


export const PouchBook = () => {
  const { logs, setLogs } = useContext(AppContext)

  const playAudioBook = () => {
    new Audio(bookSound).play();
  }

  const clickPouchBook = () => {
    playAudioBook();
    setLogs([...logs, { type:"pouch-item", text: "Diary Entry 01/01/1950: My darling Spike, I can't believe he's 10 years old today... the YEAR he was born was simply magical... My boy is the strongest pup I could ever wish for... after all, he is the keeper of this darn Cat's key.."}])
  }
  
  return (
      <img data-testid="pouch-book" className='item' id="pouch-book" onClick={clickPouchBook} src={book} style={{ height: '40px'}}/>
  )
}