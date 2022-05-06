import downArrow from "../../images/items/arrowDown.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"

export const ArrowDown = () => {
  
  const { playerLocation, setPlayerLocation } = useContext(AppContext)
  const { logs, setLogs } = useContext(AppContext)

  const goToBasement = () => {
    setPlayerLocation(1)
    setLogs([...logs, { type:"inform", text: "Running back to the basement? Coward..."}])

  }

  return (
    <div>
      <img id="down-arrow" className="item" src={downArrow} onClick={goToBasement}/>

    </div>
  )
}
