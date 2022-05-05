import armour from "../../images/items/armour.png"
import { useContext } from "react"
import { AppContext } from "../../AppContext"



export const Armour = () => {

  const { logs, setLogs } = useContext(AppContext)

  const armourClicked = () => {
    setLogs([...logs, <p>Looks like this angry fella won't let you pass</p>])
    
  }
  return (
    <div>
      <img src={armour}
        id="armour"
        className="item"
        onClick={armourClicked}
      />
    </div>
  )
}