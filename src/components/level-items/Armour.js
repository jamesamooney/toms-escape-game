import armour from "../../images/items/armour.png"


const Armour = ({armourClick}) => {
  return (
    <div>
      <img src={armour}
        id="armour"
        className="item"
        onClick={armourClick}
      />
    </div>
  )
}

export default Armour