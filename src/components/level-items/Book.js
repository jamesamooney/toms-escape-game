import book from "../../images/items/book.png"

export const Book = ({ bookClick }) => {
  return (
    <div>
      <img className='item' id="book" src={book} onClick={bookClick} style={{ height: '60px'}}/>
    </div>
  )
}

