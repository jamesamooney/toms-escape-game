import book from "../images/items/book.jpg"

export const Book = ({ bookClick, setLogs }) => {
  return (
    <div>
      
      <img src={book} onClick={bookClick} style={{ height: '60px'}}/>
    </div>
  )
}

