import armour from "../../images/items/armour.png"



export const Armour = ({ logs, setLogs }) => {

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