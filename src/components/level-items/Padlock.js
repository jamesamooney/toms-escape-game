import padlock from "../../images/items/padlock_with_code2.png"

export const Padlock = ({padClick }) => {
  return (
    <div className='padlock-div'>
      
      <img src={padlock}
        id="padlock"
        className="item"
        onClick={padClick}
      />
      
    </div>
  )
}
