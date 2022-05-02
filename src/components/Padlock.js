import padlock from "../images/items/padlock_with_code2.png"

export const Padlock = ({padClick }) => {
  return (
    <div>
      <img src={padlock} style={{ height: '60px'}} onClick={padClick}/>
    </div>
  )
}
