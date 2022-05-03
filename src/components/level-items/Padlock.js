import padlock from "../../images/items/padlock_with_code2.png"
import { PadlockForm } from "./PadlockForm"

export const Padlock = ({padClick }) => {
  return (
    <div className='padlock-div'>
      
      <img src={padlock} className="padlock" onClick={padClick} />
      
      
      
    </div>
  )
}
